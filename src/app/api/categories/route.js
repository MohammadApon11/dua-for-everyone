import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;
export async function GET(req, res) {
  let loading = true;
  if (!db) {
    db = await open({
      filename: "./dua_main.sqlite",
      driver: sqlite3.Database,
    });
  }

  const categories = await db.all("SELECT * FROM category");
  loading = false;
  return new Response(JSON.stringify({ categories, loading }), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}