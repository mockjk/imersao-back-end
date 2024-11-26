import express from "express";
import postsRoutes from "./src/routes/postsRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;
postsRoutes(app);

app.listen(PORT, () => {
  console.log(`Server escutando na porta ${PORT}`);
});
