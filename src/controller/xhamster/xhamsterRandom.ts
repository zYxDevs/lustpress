import { scrapeContent } from "../../scraper/xhamster/xhamsterGetController";
import c from "../../utils/options";
import { load } from "cheerio";
import { lust } from "../../LustPress";

export async function randomXhamster() {
  try {
    const resolve = await lust.fetchBody(`${c.XHAMSTER}/newest`);
    const $ = load(resolve);

    const videoLinks = $("div.thumb-list__item[data-video-id]")
      .map((_, el) => {
        const href = $(el).find("a[data-role='thumb-link']").attr("href");
        return href && href.includes("/videos/") ? href : null;
      })
      .get()
      .filter(Boolean);

    // Select a random video URL from the list
    const randomIndex = Math.floor(Math.random() * videoLinks.length);
    const randomUrl = videoLinks[randomIndex];

    const data = await scrapeContent(randomUrl);

    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}

