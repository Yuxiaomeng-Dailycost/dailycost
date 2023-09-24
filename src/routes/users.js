var express = require("express");
const UserController = require("../controllers/user.controller");

var UserRouter = express.Router();

UserRouter.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

UserRouter.post("/login", UserController.login);

module.exports = UserRouter;
