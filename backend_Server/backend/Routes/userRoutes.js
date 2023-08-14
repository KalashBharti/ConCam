const express = require("express");

const routes = express.Router();

const {register,login} = require("../controller/userController");

routes.post("/register",register)
routes.post("/login",login)

module.exports = routes;