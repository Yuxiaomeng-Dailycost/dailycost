const UserService = require("../services/userService");

const UserController = {
  login: async (req, res) => {
    var result = await UserService.login(req.body);
    if (result == null) {
      res.send({
        code: -1,
        error: "invalid username or password",
      });
    } else {
      res.send({
        code: 1,
      });
    }
  },
};

module.exports = UserController;
