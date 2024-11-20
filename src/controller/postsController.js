import getTodosPosts from "../models/postModel.js";


export async function listarTodosPosts(Req, Res) {
  const response = await getTodosPosts();
  Res.status(200).send(response);
}
