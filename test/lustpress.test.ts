import { test } from "bun:test";
import assert from "node:assert/strict";

const port = process.env.PORT ?? 3000;

type ApiResponse = {
  success: boolean;
  data?: {
    id?: string | number;
  };
};

async function run(path: string) {
  const res = await fetch(`http://localhost:${port}${path}`);

  assert.equal(res.status, 200);

  const json = (await res.json()) as ApiResponse;

  console.log(JSON.stringify(json, null, 2));

  if (!json.success) {
    throw new Error("scraper failed");
  }
}

test("pornhub", async () => {
  await run("/pornhub/random");
}, 300000);

test("xnxx", async () => {
  await run("/xnxx/random");
}, 120000);

test("redtube", async () => {
  await run("/redtube/random");
}, 120000);

test("xvideos", async () => {
  await run("/xvideos/random");
}, 120000);

test("xhamster", async () => {
  await run("/xhamster/random");
}, 120000);

test("youporn", async () => {
  await run("/youporn/random");
}, 120000);

test("eporner", async () => {
  await run("/eporner/random");
}, 120000);

test("txxx", async () => {
  await run("/txxx/random");
}, 120000);