import { lust } from "../../LustPress";
import { TxxxSearchResponse } from "../../interfaces";

export async function searchTxxx({
  query,
}: {
  query: { key: string; page?: string };
}) {
  try {
    const { key } = query;
    const page = Number(query.page || 1);

    const apiUrl =
      "https://txxx.com/api/videos2.php" +
      `?params=259200/str/relevance/60/search..${page}.all..` +
      `&s=${encodeURIComponent(key)}`;

    // Fetch from API directly
    const buffer = await lust.fetchBody(apiUrl);
    const rawData = JSON.parse(buffer.toString("utf-8")) as TxxxSearchResponse;

    const videos = Array.isArray(rawData.videos) ? rawData.videos : [];

    const data = videos.map((v) => ({
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
    }));

    return {
      success: true,
      total_count: String(rawData.total_count ?? videos.length),
      pages: Number(rawData.pages ?? 1),
      page,
      data,
    };
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}


