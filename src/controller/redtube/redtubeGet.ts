import { scrapeContent } from "../../scraper/redtube/redtubeGetController";
import c from "../../utils/options";

export async function getRedtube({ query }: { query: { id: string } }) {
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

