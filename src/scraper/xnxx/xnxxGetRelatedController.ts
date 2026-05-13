import { load } from "cheerio";
import { lust } from "../../LustPress";
import c from "../../utils/options";
import { ISearchVideoData, XnxxRelatedRaw } from "../../interfaces";

export async function scrapeContent(url: string) {
  try {
    const res = await lust.fetchBody(url);
    const $ = load(res);

    class XnxxSearch {
      search: object[];
      constructor() {
        this.search = $("div#video-player-bg")
          .map((i, el) => {
            const script = $(el).find("script").html();
            const video_related = script?.split("var video_related=")[1];
            const badJson = video_related?.split("];")[0] + "]";
            const actualResult = JSON.parse(String(badJson)) as XnxxRelatedRaw[];
            const result = actualResult.map((rel) => {
              return {
                link: `${c.XNXX}${rel.u}`,
                id: rel.u.slice(1, -1),
                title: rel.t,
                image: rel.i,
                duration: rel.d,
                views: `${rel.n}, ${rel.r}`,
                video: `${c.XNXX}/embedframe/${rel.id}`
              };
            });
            return result;
          }).get();
      }
    }

    const x = new XnxxSearch();
    if (x.search.length === 0) throw Error("No result found");
    const result: ISearchVideoData = {
      success: true,
      data: x.search as unknown as string[],
      source: url,
    };
    return result;

  } catch (err) {
    const e = err as Error;
    throw Error(e.message);
  }
}