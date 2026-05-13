import { scrapeContent } from "../../scraper/youporn/youpornSearchController";
import c from "../../utils/options";

export async function relatedYouporn({ query }: { query: { id: string } }) {
  try {
    const { id } = query;
    const url = `${c.YOUPORN}/watch/${id}`;
    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}

