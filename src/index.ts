import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { lust } from "./LustPress";
import { scrapeRoutes } from "./router/endpoint";
import pkg from "../package.json";

const app = new Elysia()
  .use(cors())
  .use(
    swagger({
      path: "/docs",
      documentation: {
        info: {
          title: "Lustpress API",
          version: pkg.version,
          description: pkg.description,
        },
      },
    })
  )
  .get("/", async () => ({
    success: true,
    playground: "https://sinkaroid.github.io/lustpress",
    endpoint:
      "https://github.com/sinkaroid/lustpress/blob/master/README.md#routing",
    date: new Date().toLocaleString(),
    rss: lust.currentProccess().rss,
    heap: lust.currentProccess().heap,
    server: await lust.getServer(),
    version: pkg.version,
  }))
  .use(scrapeRoutes)
  .onError(({ code, error, set }) => {
    console.log("Error occurred:", error);
    if (code === "NOT_FOUND") {
      set.status = 404;
      return {
        success: false,
        message: (error as Error).message || "Not Found",
      };
    }
    set.status = 500;
    return {
      success: false,
      message: (error as Error).message || "Internal Server Error",
      stack: (error as Error).stack,
    };
  })
  .listen(process.env.PORT || 3000);

console.log(
  `Lustpress is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;