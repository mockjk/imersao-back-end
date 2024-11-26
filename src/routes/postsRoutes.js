import express from "express";
import multer from "multer";
import { listarTodosPosts, postarNovoPost, imageUpload } from "../controller/postsController.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({dest: "./uploads", storage});

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", listarTodosPosts);
  app.post("/posts", postarNovoPost);
  app.post("/upload", upload.single("image"), imageUpload);
};

export default routes;
