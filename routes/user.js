const express = require("express");

const { loginUser, signUpUser } = require("../controllers/userControllers")

const app = express.Router();

// Login
app.route("/login").post(loginUser);

//SignUp
app.route("/signup").post(signUpUser);

module.exports = app;