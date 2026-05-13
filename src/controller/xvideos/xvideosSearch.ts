import { scrapeContent } from "../../scraper/xvideos/xvideosSearchController";
import c from "../../utils/options";
import { spacer } from "../../utils/modifier";

export async function searchXvideos({
  query,
}: {
  query: { key: string; page?: string };
}) {
  try {
    const { key } = query;
    const page = query.page || "0";

    const url = `${c.XVIDEOS}/?k=${spacer(key)}&p=${page}`;
    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}