import { scrapeContent } from "../../scraper/pornhub/pornhubSearchController";
import c from "../../utils/options";
import { spacer } from "../../utils/modifier";

const sorting = ["mr", "mv", "tr", "lg"];

export async function searchPornhub({
  query,
}: {
  query: { key: string; page?: string; sort?: string };
}) {
  try {
    const { key, sort } = query;
    const page = query.page || "1";

    let url;
    if (!sort) url = `${c.PORNHUB}/video/search?search=${spacer(key)}`;
    else if (!sorting.includes(sort))
      url = `${c.PORNHUB}/video/search?search=${spacer(key)}&page=${page}`;
    else
      url = `${c.PORNHUB}/video/search?search=${spacer(key)}&o=${sort}&page=${page}`;

    const data = await scrapeContent(url);
    return data;
  } catch (err) {
    const e = err as Error;
    throw new Error(e.message);
  }
}