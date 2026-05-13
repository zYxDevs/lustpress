import { scrapeContent } from "../../scraper/eporner/epornerSearchController";
import c from "../../utils/options";

export async function searchEporner({
  query,
}: {
  query: { key: string; page?: string };
}) {
  try {
    const { key } = query;
    const page = Number(query.page || 1);

    const slug = key
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");

    const url =
      page === 1
        ? `${c.EPORNER}/tag/${slug}/`
        : `${c.EPORNER}/tag/${slug}/${page}/`;

    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}