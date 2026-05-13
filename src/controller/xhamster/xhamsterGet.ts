import { scrapeContent } from "../../scraper/xhamster/xhamsterGetController";
import c from "../../utils/options";

export async function getXhamster({ query }: { query: { id: string } }) {
  try {
    const { id } = query;
    const url = `${c.XHAMSTER}/videos/${id}`;
    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}

