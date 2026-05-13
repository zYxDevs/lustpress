import { scrapeContent } from "../../scraper/xnxx/xnxxGetController";
import c from "../../utils/options";

export async function getXnxx({ query }: { query: { id: string } }) {
  try {
    const { id } = query;
    const url = `${c.XNXX}/${id}`;
    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}

