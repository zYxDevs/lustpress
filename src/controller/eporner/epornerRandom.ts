import { scrapeContent as searchScrape } from "../../scraper/eporner/epornerSearchController";
import { scrapeContent as videoScrape } from "../../scraper/eporner/epornerGetController";
import c from "../../utils/options";

export async function randomEporner() {
  try {
    const weeklyUrl = `${c.EPORNER}/cat/all/SORT-top-weekly/`;
    const list = await searchScrape(weeklyUrl);

    if (!list.data.length) {
      throw new Error("No weekly top videos found");
    }

    const random = list.data[Math.floor(Math.random() * list.data.length)];

    let path: string;

    if (random.id.startsWith("video-")) {
      path = random.id;
    } else {
      path = `hd-porn/${random.id}`;
    }

    const url = `${c.EPORNER}/${path}`;
    const data = await videoScrape(url);

    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}