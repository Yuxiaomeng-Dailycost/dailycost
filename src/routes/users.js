var express = require("express");
const UserController = require("../controllers/usercontroller");

var UserRouter = express.Router();

UserRouter.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

UserRouter.post("/login", UserController.login);

module.exports = UserRouter;
