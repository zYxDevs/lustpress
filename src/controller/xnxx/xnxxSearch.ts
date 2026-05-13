import { scrapeContent } from "../../scraper/xnxx/xnxxSearchController";
import c from "../../utils/options";
import { spacer } from "../../utils/modifier";

export async function searchXnxx({
  query,
}: {
  query: { key: string; page?: string };
}) {
  try {
    const { key } = query;
    const page = query.page || "0";
    const url = `${c.XNXX}/search/${spacer(key)}/${page}`;
    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}