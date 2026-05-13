import { scrapeContent } from "../../scraper/xnxx/xnxxGetController";
import c from "../../utils/options";
import { lust } from "../../LustPress";
import { load } from "cheerio";

export async function randomXnxx() {
  try {
    const resolve = await lust.fetchBody(
      "https://www.xnxx.com/search/random/random"
    );
    const $ = load(resolve);
    const search = $("div.mozaique > div")
      .map((i, el) => {
        return $(el).find("a").attr("href");
      })
      .get();
    const random = Math.floor(Math.random() * search.length);

    const url = c.XNXX + search[random];
    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}

