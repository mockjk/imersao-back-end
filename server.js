import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json);

const posts = [
  {
    id: 1,
    descricao: "String teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Olha que gatinho mais fofo!",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 3,
    descricao: "Gato curioso explorando a caixa!",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 4,
    descricao: "Um gatinho ronronando no sol.",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 5,
    descricao: "Gato brincando com um novelo de lã.",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    descricao: "Um gatinho preto muito elegante.",
    imagem: "https://placecats.com/millie/300/150",
  },
];

app.listen(PORT, () => {
  console.log("Server escutando");
});

app.get("/posts", (Req, Res) => {
  Res.status(200).send(posts);
});

function buscarPostID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    });
}

app.get("/posts/:id", (Req, Res) => {
  const index = buscarPostID(Req.params.id);
  Res.status(200).json(posts[index]);
});
