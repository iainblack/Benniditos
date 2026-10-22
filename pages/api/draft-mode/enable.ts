import type { NextApiRequest, NextApiResponse } from "next";
import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { sanityClient } from "@/lib/sanity/client";

// This is a Pages Router API route (pages/api/*), so it must export a
// default handler(req, res) function. It cannot use the App Router
// "route handler" convention (`export function GET(request: Request)`,
// `next/headers`, `next/navigation`) - those only work under an `app/`
// directory, which this project does not have.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string | void>
) {
  if (!sanityClient) {
    return res.status(500).send("Sanity is not configured");
  }

  if (!process.env.SANITY_API_READ_TOKEN) {
    return res
      .status(500)
      .send("Missing SANITY_API_READ_TOKEN environment variable");
  }

  if (!req.url) {
    return res.status(400).send("Missing url");
  }

  // validatePreviewUrl requires a client with a token (Viewer role or
  // above) so it can read the preview-url-secret document.
  const clientWithToken = sanityClient.withConfig({
    token: process.env.SANITY_API_READ_TOKEN,
  });

  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    clientWithToken,
    req.url
  );

  if (!isValid) {
    return res.status(401).send("Invalid secret");
  }

  // Enable Draft Mode by setting the cookie.
  res.setDraftMode({ enable: true });

  res.writeHead(307, { Location: redirectTo });
  res.end();
}
