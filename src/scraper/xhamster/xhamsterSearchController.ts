import { load } from "cheerio";
import { lust } from "../../LustPress";
import c from "../../utils/options";
import { ISearchVideoData, XhamsterSearchItem } from "../../interfaces";

export async function scrapeContent(url: string) {
  try {
    const res = await lust.fetchBody(url);
    const $ = load(res);

    class XhamsterSearch {
      search: XhamsterSearchItem[];
      constructor() {
        const views = $("div.video-thumb-views")
          .map((i, el) => {
            return $(el).text();
          })
          .get();
        const duration = $("span[data-role='video-duration']")
          .map((i, el) => {
            return $(el).text();
          })
          .get();
        this.search = $("a.video-thumb__image-container")
          .map((i, el) => {
            const link = $(el).attr("href") || "";

            return {
              link: link,
              id: link.split("/")[4] || "None",
              title: $(el).find("img").attr("alt") || "None",
              image: $(el).find("img").attr("src") || "None",
              duration: duration[i] || "None",
              views: views[i] || "None",
              video: `${c.XHAMSTER}/embed/${link.split("-").pop()}`,
            };
          })
          .get();
      }
    }

    const xh = new XhamsterSearch();
    if (xh.search.length === 0) throw Error("No result found");
    const result: ISearchVideoData = {
      success: true,
      data: xh.search as unknown as string[],
      source: url,
    };
    return result;
  } catch (err) {
    const e = err as Error;
    throw Error(e.message);
  }
}