import { load } from "cheerio";
import { lust } from "../../LustPress";
import c from "../../utils/options";
import { ISearchVideoData, XvideosSearchItem } from "../../interfaces";

export async function scrapeContent(url: string) {
  try {
    const res = await lust.fetchBody(url);
    const $ = load(res);

    class XvideosSearch {
      search: XvideosSearchItem[];
      constructor() {
        const data = $("div.thumb-under")
          .map((i, el) => {
            return {
              title: $(el).find("a").attr("title"),
              duration: $(el).find("span.duration")
                .map((i, el) => {
                  return $(el).text();
                }).get()[0],
            };
          }).get();
        this.search = $("div.mozaique.cust-nb-cols")
          .find("div.thumb")
          .map((i, el) => {
            const href = $(el).find("a").attr("href") || "None";
            const videoId = $(el).find("img").attr("data-videoid");
            return {
              link: `${c.XVIDEOS}${href}`,
              id: href,
              image: $(el).find("img").attr("data-src") || "None",
              title: data[i]?.title || "None",
              duration: data[i]?.duration === data[i + 1]?.duration
                ? ""
                : data[i]?.duration || "None",
              rating: null,
              video: `${c.XVIDEOS}/embedframe/${videoId}`
            };
          }).get();

        this.search = this.search.filter((el) => {
          return !el.id.includes("THUMBNUM");
        });
        this.search = this.search.filter((el) => {
          return el.id.includes("/video");
        });
      }
    }

    const xv = new XvideosSearch();
    if (xv.search.length === 0) throw Error("No result found");
    const result: ISearchVideoData = {
      success: true,
      data: xv.search as unknown as string[],
      source: url,
    };
    return result;

  } catch (err) {
    const e = err as Error;
    throw Error(e.message);
  }
}