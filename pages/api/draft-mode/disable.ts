import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<void>
): void {
  // Exit Draft Mode by clearing the cookie.
  res.setDraftMode({ enable: false });

  res.writeHead(307, { Location: "/" });
  res.end();
}
