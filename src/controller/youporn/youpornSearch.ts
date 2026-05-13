import { scrapeContent } from "../../scraper/youporn/youpornSearchController";
import c from "../../utils/options";
import { spacer } from "../../utils/modifier";

export async function searchYouporn({
  query,
}: {
  query: { key: string; page?: string };
}) {
  try {
    const { key } = query;
    const page = query.page || "1";

    const url = `${c.YOUPORN}/search/?query=${spacer(key)}&page=${page}`;
    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}