import { scrapeContent } from "../../scraper/xhamster/xhamsterSearchController";
import c from "../../utils/options";
import { spacer } from "../../utils/modifier";

export async function searchXhamster({
  query,
}: {
  query: { key: string; page?: string };
}) {
  try {
    const { key } = query;
    const page = query.page || "1";

    const url = `${c.XHAMSTER}/search/${spacer(key)}?page=${page}`;
    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}