import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export default async function handler() {
  const draft = await draftMode();
  draft.enable();
  redirect("/");
}
