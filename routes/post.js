const express = require("express");

const {getAllPosts, createPost} = require("../controllers/postControllers")

const app = express.Router();

const requireAuth = require("../middleware/requireAuth")

app.use(requireAuth);

app.route("/").get(getAllPosts).post(createPost);

module.exports = app;