import fs from "fs";
import { getTodosPosts, criarPost } from "../models/postModel.js";

export async function listarTodosPosts(Req, Res) {
  try {
    const response = await getTodosPosts();
    Res.status(200).send(response);
  } catch (err) {
    console.error(err);
    return Res.status(500).send(err);
  };
};

export async function postarNovoPost(Req, Res) {
  const content = Req.body;
  try {
    const response = await criarPost(content);
    Res.status(200).send(response);
  } catch (err) {
    console.error(err);
    return Res.status(500).json({ Erro: "Erro na requisição"})
  };  
};

export async function imageUpload(req, res){
  const newPost = {
      descricao: "",
      imgUrl: req.file.originalname,
      alt: "",
      createdAt: new Date(),
  };

  try {  
      const createdPost = await criarPost(newPost);
      const uploadedImage = `uploads/${createdPost.insertedId}.png`;
      fs.renameSync(req.file.path, uploadedImage);
      res.status(200).json(createdPost);
  } catch (error) {
      console.error(error.message);
      res.status(500).json({
          error: "Falha na requisição",
      });
  };
};
