import { scrapeContent } from "../../scraper/redtube/redtubeGetController";
import c from "../../utils/options";
import { load } from "cheerio";
import { lust } from "../../LustPress";

export async function randomRedtube() {
  try {
    const resolve = await lust.fetchBody(c.REDTUBE);
    const $ = load(resolve);
    const search = $("a.video_link")
      .map((i, el) => {
        return $(el).attr("href");
      })
      .get();
    const random = Math.floor(Math.random() * search.length);

    const url = c.REDTUBE + search[random];
    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}

