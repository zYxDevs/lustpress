import { scrapeContent } from "../../scraper/pornhub/pornhubGetController";
import c from "../../utils/options";

export async function randomPornhub() {
  try {
    const url = `${c.PORNHUB}/video/random`;
    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}

