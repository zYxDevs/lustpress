import { scrapeContent } from "../../scraper/eporner/epornerGetController";
import c from "../../utils/options";

export async function getEporner({ query }: { query: { id: string } }) {
  try {
    const { id } = query;
    let path: string;

    if (id.startsWith("video-")) {
      path = id;
    } else {
      path = `hd-porn/${id}`;
    }

    const url = `${c.EPORNER}/${path}`;

    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}

