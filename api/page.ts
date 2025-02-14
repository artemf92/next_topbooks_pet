import { API } from "@/app/(site)/api"
import { PageModel } from "@/interfaces/page.props"

export async function getPage(slug: string): Promise<PageModel | null> {
  const res = await fetch(API.topPage.byAlias + slug, {
    method: 'GET',
  })

  if (!res.ok) {
    return null;
  }

  return res.json()
}