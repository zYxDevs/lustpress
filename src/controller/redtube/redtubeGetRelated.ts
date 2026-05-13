import { scrapeContent } from "../../scraper/redtube/redtubeSearchController";
import c from "../../utils/options";

export async function relatedRedtube({ query }: { query: { id: string } }) {
  try {
    const { id } = query;
    const url = `${c.REDTUBE}/${id}`;
    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}