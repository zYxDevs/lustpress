import { scrapeContent } from "../../scraper/xhamster/xhamsterSearchController";
import c from "../../utils/options";

export async function relatedXhamster({ query }: { query: { id: string } }) {
  try {
    const { id } = query;
    const url = `${c.XHAMSTER}/${id}`;
    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}

