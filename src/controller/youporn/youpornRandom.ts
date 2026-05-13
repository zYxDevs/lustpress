import { scrapeContent } from "../../scraper/youporn/youpornGetController";
import c from "../../utils/options";
import { load } from "cheerio";
import { lust } from "../../LustPress";

export async function randomYouporn() {
  try {
    const resolve = await lust.fetchBody(`${c.YOUPORN}`);
    const $ = load(resolve);
    const search = $("a[href^='/watch/']")
      .map((i, el) => {
        return $(el).attr("href");
      })
      .get();
    const random = Math.floor(Math.random() * search.length);
    const url = c.YOUPORN + search[random];
    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}
