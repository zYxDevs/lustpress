import { Elysia, t } from "elysia";

// EPorner
import { getEporner } from "../controller/eporner/epornerGet";
import { searchEporner } from "../controller/eporner/epornerSearch";
import { relatedEporner } from "../controller/eporner/epornerGetRelated";
import { randomEporner } from "../controller/eporner/epornerRandom";

// TXXX
import { getTxxx } from "../controller/txxx/txxxGet";
import { searchTxxx } from "../controller/txxx/txxxSearch";
import { relatedTxxx } from "../controller/txxx/txxxGetRelated";
import { randomTxxx } from "../controller/txxx/txxxRandom";

// PornHub
import { getPornhub } from "../controller/pornhub/pornhubGet";
import { searchPornhub } from "../controller/pornhub/pornhubSearch";
import { randomPornhub } from "../controller/pornhub/pornhubRandom";
import { relatedPornhub } from "../controller/pornhub/pornhubGetRelated";

// XNXX
import { getXnxx } from "../controller/xnxx/xnxxGet";
import { searchXnxx } from "../controller/xnxx/xnxxSearch";
import { relatedXnxx } from "../controller/xnxx/xnxxGetRelated";
import { randomXnxx } from "../controller/xnxx/xnxxRandom";

// RedTube
import { getRedtube } from "../controller/redtube/redtubeGet";
import { searchRedtube } from "../controller/redtube/redtubeSearch";
import { relatedRedtube } from "../controller/redtube/redtubeGetRelated";
import { randomRedtube } from "../controller/redtube/redtubeRandom";

// Xvideos
import { getXvideos } from "../controller/xvideos/xvideosGet";
import { searchXvideos } from "../controller/xvideos/xvideosSearch";
import { randomXvideos } from "../controller/xvideos/xvideosRandom";
import { relatedXvideos } from "../controller/xvideos/xvideosGetRelated";

// Xhamster
import { getXhamster } from "../controller/xhamster/xhamsterGet";
import { searchXhamster } from "../controller/xhamster/xhamsterSearch";
import { randomXhamster } from "../controller/xhamster/xhamsterRandom";
import { relatedXhamster } from "../controller/xhamster/xhamsterGetRelated";

// YouPorn
import { getYouporn } from "../controller/youporn/youpornGet";
import { searchYouporn } from "../controller/youporn/youpornSearch";
import { relatedYouporn } from "../controller/youporn/youpornGetRelated";
import { randomYouporn } from "../controller/youporn/youpornRandom";

const queryId = {
  query: t.Object({ id: t.String() }),
};

const querySearch = {
  query: t.Object({
    key: t.String(),
    page: t.Optional(t.String()),
  }),
};

export const scrapeRoutes = (app: Elysia) =>
  app
    .group("/pornhub", (app) =>
      app
        .get("/get", getPornhub, {
          ...queryId,
          detail: { summary: "Get Pornhub video data", tags: ["Pornhub"] },
        })
        .get("/search", searchPornhub, {
          ...querySearch,
          detail: { summary: "Search Pornhub videos", tags: ["Pornhub"] },
        })
        .get("/random", randomPornhub, {
          detail: { summary: "Get random Pornhub videos", tags: ["Pornhub"] },
        })
        .get("/related", relatedPornhub, {
          ...queryId,
          detail: { summary: "Get related Pornhub videos", tags: ["Pornhub"] },
        })
    )
    .group("/xnxx", (app) =>
      app
        .get("/get", getXnxx, {
          ...queryId,
          detail: { summary: "Get XNXX video data", tags: ["XNXX"] },
        })
        .get("/search", searchXnxx, {
          ...querySearch,
          detail: { summary: "Search XNXX videos", tags: ["XNXX"] },
        })
        .get("/related", relatedXnxx, {
          ...queryId,
          detail: { summary: "Get related XNXX videos", tags: ["XNXX"] },
        })
        .get("/random", randomXnxx, {
          detail: { summary: "Get random XNXX videos", tags: ["XNXX"] },
        })
    )
    .group("/redtube", (app) =>
      app
        .get("/get", getRedtube, {
          ...queryId,
          detail: { summary: "Get RedTube video data", tags: ["RedTube"] },
        })
        .get("/search", searchRedtube, {
          ...querySearch,
          detail: { summary: "Search RedTube videos", tags: ["RedTube"] },
        })
        .get("/related", relatedRedtube, {
          ...queryId,
          detail: { summary: "Get related RedTube videos", tags: ["RedTube"] },
        })
        .get("/random", randomRedtube, {
          detail: { summary: "Get random RedTube videos", tags: ["RedTube"] },
        })
    )
    .group("/xvideos", (app) =>
      app
        .get("/get", getXvideos, {
          ...queryId,
          detail: { summary: "Get Xvideos video data", tags: ["Xvideos"] },
        })
        .get("/search", searchXvideos, {
          ...querySearch,
          detail: { summary: "Search Xvideos videos", tags: ["Xvideos"] },
        })
        .get("/random", randomXvideos, {
          detail: { summary: "Get random Xvideos videos", tags: ["Xvideos"] },
        })
        .get("/related", relatedXvideos, {
          ...queryId,
          detail: { summary: "Get related Xvideos videos", tags: ["Xvideos"] },
        })
    )
    .group("/xhamster", (app) =>
      app
        .get("/get", getXhamster, {
          ...queryId,
          detail: { summary: "Get Xhamster video data", tags: ["Xhamster"] },
        })
        .get("/search", searchXhamster, {
          ...querySearch,
          detail: { summary: "Search Xhamster videos", tags: ["Xhamster"] },
        })
        .get("/random", randomXhamster, {
          detail: { summary: "Get random Xhamster videos", tags: ["Xhamster"] },
        })
        .get("/related", relatedXhamster, {
          ...queryId,
          detail: { summary: "Get related Xhamster videos", tags: ["Xhamster"] },
        })
    )
    .group("/youporn", (app) =>
      app
        .get("/get", getYouporn, {
          ...queryId,
          detail: { summary: "Get YouPorn video data", tags: ["YouPorn"] },
        })
        .get("/search", searchYouporn, {
          ...querySearch,
          detail: { summary: "Search YouPorn videos", tags: ["YouPorn"] },
        })
        .get("/related", relatedYouporn, {
          ...queryId,
          detail: { summary: "Get related YouPorn videos", tags: ["YouPorn"] },
        })
        .get("/random", randomYouporn, {
          detail: { summary: "Get random YouPorn videos", tags: ["YouPorn"] },
        })
    )
    .group("/eporner", (app) =>
      app
        .get("/get", getEporner, {
          ...queryId,
          detail: { summary: "Get EPorner video data", tags: ["EPorner"] },
        })
        .get("/search", searchEporner, {
          ...querySearch,
          detail: { summary: "Search EPorner videos", tags: ["EPorner"] },
        })
        .get("/related", relatedEporner, {
          ...queryId,
          detail: { summary: "Get related EPorner videos", tags: ["EPorner"] },
        })
        .get("/random", randomEporner, {
          detail: { summary: "Get random EPorner videos", tags: ["EPorner"] },
        })
    )
    .group("/txxx", (app) =>
      app
        .get("/get", getTxxx, {
          ...queryId,
          detail: { summary: "Get TXXX video data", tags: ["TXXX"] },
        })
        .get("/search", searchTxxx, {
          ...querySearch,
          detail: { summary: "Search TXXX videos", tags: ["TXXX"] },
        })
        .get("/related", relatedTxxx, {
          ...queryId,
          detail: { summary: "Get related TXXX videos", tags: ["TXXX"] },
        })
        .get("/random", randomTxxx, {
          detail: { summary: "Get random TXXX videos", tags: ["TXXX"] },
        })
    );