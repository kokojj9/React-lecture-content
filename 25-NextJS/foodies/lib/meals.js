import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
  // run은 데이터를 추가하거나 수정할때 all은 가져올때
}
