import { scrapeContent } from "../../scraper/pornhub/pornhubSearchController";
import c from "../../utils/options";

export async function relatedPornhub({ query }: { query: { id: string } }) {
  try {
    const { id } = query;
    const url = `${c.PORNHUB}/view_video.php?viewkey=${id}`;
    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}

