import { load } from "cheerio";
import { lust } from "../../LustPress";
import c from "../../utils/options";
import { ISearchVideoData, RedTubeSearchItem } from "../../interfaces";

export async function scrapeContent(url: string) {
  try {
    const res = await lust.fetchBody(url);
    const $ = load(res);

    class RedTubeSearch {
      views: string[];
      search: RedTubeSearchItem[];
      data: RedTubeSearchItem[];
      constructor() {
        this.views = $("span.video_count")
          .map((i, el) => {
            return $(el).text();
          }).get();
        this.search = $("a.video_link")
          .map((i, el) => {
            const link = $(el).attr("href") || "";
            const id = link.split("/")[1] || "None";
            const title = $(el).find("img").attr("alt") || "None";
            const image = $(el).find("img").attr("data-src") || "None";
            const duration = $(el).find("span.duration").text().split(" ").map((el: string) => {
              return el.replace(/[^0-9:]/g, "");
            }).filter((el: string) => {
              return el.includes(":");
            }).join(" ");

            return {
              link: `${c.REDTUBE}${link}`,
              id: id,
              title: title,
              image: image,
              duration: duration,
              views: this.views[i] || "None",
              video: `https://embed.redtube.com/?id=${id}`,
            };
          }).get();

        this.data = this.search.filter((el) => {
          return el.link.includes("javascript:void(0)") === false && el.image?.startsWith("data:image") === false;
        });
      }
    }

    const red = new RedTubeSearch();

    if (red.search.length === 0) throw Error("No result found");
    const result: ISearchVideoData = {
      success: true,
      data: red.data as unknown as string[],
      source: url,
    };
    return result;

  } catch (err) {
    const e = err as Error;
    throw Error(e.message);
  }
}