import { load } from "cheerio";
import { lust } from "../../LustPress";
import c from "../../utils/options";
import { ISearchVideoData, PornhubSearchItem } from "../../interfaces";

export async function scrapeContent(url: string) {
  try {
    const res = await lust.fetchBody(url);
    const $ = load(res);

    class PornhubSearch {
      search: PornhubSearchItem[];
      data: PornhubSearchItem[];
      constructor() {
        this.search = $("div.wrap")
          .map((i, el) => {
            const link = $(el).find("a").attr("href") || "";
            const id = link.split("=")[1] || "None";
            const title = $(el).find("a").attr("title") || "None";
            const image = $(el).find("img").attr("src") || "None";
            const duration = $(el).find("var.duration").text() || "None";
            const views = $(el).find("div.videoDetailsBlock").find("span.views").text() || "None";
            return {
              link: `${c.PORNHUB}${link}`,
              id: id,
              title: title,
              image: image,
              duration: duration,
              views: views,
              video: `${c.PORNHUB}/embed/${id}`,
            };
          }).get();

        this.data = this.search.filter((el) => {
          return el.link.includes("javascript:void(0)") === false && el.image?.startsWith("data:image") === false;
        });
      }

    }

    const ph = new PornhubSearch();
    if (ph.search.length === 0) throw Error("No result found");
    const result: ISearchVideoData = {
      success: true,
      data: ph.data as unknown as string[],
      source: url,
    };
    return result;

  } catch (err) {
    const e = err as Error;
    throw Error(e.message);
  }
}