import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server escutando");
});

app.get("/api", (Req, Res) => {
  Res.status(200).send(posts);
});
