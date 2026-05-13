import { lust } from "../../LustPress";
import { ISearchVideoData, TxxxRelatedResponse } from "../../interfaces";

function getRelatedApiUrl(videoId: string, page = 1, count = 50): string {
  const id = Number(videoId);
  if (Number.isNaN(id)) throw new Error("Invalid video id");

  const million = Math.floor(id / 1_000_000) * 1_000_000;
  const thousand = Math.floor(id / 1_000) * 1_000;

  return (
    "https://txxx.com/api/json/videos_related2/" +
    `432000/${count}/${million}/${thousand}/${id}.all.${page}.json`
  );
}

export async function relatedTxxx({
  query,
}: {
  query: { id: string; page?: string };
}) {
  try {
    const { id } = query;
    const page = Number(query.page || 1);

    if (!id) throw new Error("Parameter id is required");
    if (Number.isNaN(page)) throw new Error("Parameter page must be a number");

    const apiUrl = getRelatedApiUrl(id, page);

    const buffer = await lust.fetchBody(apiUrl);
    const rawData = JSON.parse(buffer.toString("utf-8")) as TxxxRelatedResponse;

    const videos = Array.isArray(rawData.videos) ? rawData.videos : [];

    const data = videos.map((v) => ({
      id: String(v.video_id),
      title: v.title,
      image: v.scr || v.thumb || "",
      duration: v.duration || "None",
      views: v.video_viewed || "0",
      rating: v.rating || "0",
      uploader: v.username || v.display_name || "",
      link: `https://txxx.com/videos/${v.video_id}/${v.dir}/`,
      video: `https://txxx.com/embed/${v.video_id}/`,
    }));

    return {
      success: true,
      total_count: String(rawData.total_count || "0"),
      pages: rawData.pages || 1,
      page,
      data,
      source: `https://txxx.com/videos/${id}/`,
    } as unknown as ISearchVideoData;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}
