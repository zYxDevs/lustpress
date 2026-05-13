import { lust } from "../../LustPress";
import { TxxxSearchResponse as TxxxResponse } from "../../interfaces";

export async function randomTxxx() {
  try {
    const apiUrl =
      "https://txxx.com/api/json/videos2/14400/str/most-popular/60/..1.all..day.json";

    const buffer = await lust.fetchBody(apiUrl);
    const rawData = JSON.parse(buffer.toString("utf-8")) as TxxxResponse;

    const videos = Array.isArray(rawData.videos) ? rawData.videos : [];

    if (videos.length === 0) {
      throw new Error("No videos returned from upstream");
    }

    // Pick one random video
    const v = videos[Math.floor(Math.random() * videos.length)];

    const data = {
      video_id: v.video_id,
      title: v.title,
      dir: v.dir,
      duration: v.duration,
      views: v.video_viewed,
      rating: v.rating,
      uploaded: v.post_date,
      likes: v.likes,
      dislikes: v.dislikes,
      image: v.scr,
      categories: v.categories ? v.categories.split(",") : [],
      embed: `https://txxx.com/embed/${v.video_id}/`,
    };

    return {
      success: true,
      data,
      source: apiUrl,
    };
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}


