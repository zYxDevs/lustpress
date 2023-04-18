import { load } from "cheerio";
import LustPress from "../../LustPress";
import c from "../../utils/options";
import { ISearchVideoData } from "../../interfaces";

const lust = new LustPress();

export async function scrapeContent(url: string) {
  try {
    const res = await lust.fetchBody(url);
    const $ = load(res);

    class PornhubSearch {
      search: object[];
      data: object;
      constructor() {
        // in <div id="video-player-bg"> get <script>var video_related=
        this.search = $("div#video-player-bg")
          .map((i, el) => {
            const script = $(el).find("script").html();
            const video_related = script?.split("var video_related=")[1];
            //stop and replace everything after the last ];
            const badJson = video_related?.split("];")[0] + "]";
            const actualResult = JSON.parse(String(badJson));
            const result = actualResult.map((el: any) => {
              return {
                link: `${c.XNXX}${el.u}`,
                id: el.u,
                title: el.t,
                image: el.i,
                duration: el.d,
                views: `${el.n}, ${el.r}`,
                video: null
              };
            });
            return result;
          }).get();
      }
    }
    
    const x = new PornhubSearch();
    if (x.search.length === 0) throw Error("No result found");
    const data = x.search as unknown as string[];
    const result: ISearchVideoData = {
      success: true,
      data: data,
      source: url,
    };
    return result;

  } catch (err) {
    const e = err as Error;
    throw Error(e.message);
  }
}