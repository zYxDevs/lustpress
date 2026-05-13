import { scrapeContent } from "../../scraper/eporner/epornerGetRelatedController";
import c from "../../utils/options";

export async function relatedEporner({ query }: { query: { id: string } }) {
  try {
    const { id } = query;
    const url = `${c.EPORNER}/video-${id}`;
    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}

