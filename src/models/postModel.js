import conectarAoBanco from "../config/dbConfig.js";

const connection = await conectarAoBanco(process.env.KEY_CONNECTION);

export default async function getTodosPosts() {
  const db = connection.db("imersao-back-end");
  const collection = db.collection("posts");
  return collection.find().toArray();
}
