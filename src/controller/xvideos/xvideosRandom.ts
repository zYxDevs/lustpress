import { load } from "cheerio";
import { scrapeContent } from "../../scraper/xvideos/xvideosGetController";
import c from "../../utils/options";
import { lust } from "../../LustPress";

export async function randomXvideos() {
  try {
    const resolve = await lust.fetchBody(c.XVIDEOS);
    const $ = load(resolve);
    const search = $("div.thumb-under")
      .find("a")
      .map((i, el) => $(el).attr("href"))
      .get();
    const filtered = search.filter((el) => el.includes("/video"));
    const filtered_ = filtered.filter((el) => !el.includes("THUMBNUM"));
    const random = Math.floor(Math.random() * filtered_.length);

    const url = c.XVIDEOS + filtered_[random];
    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}

