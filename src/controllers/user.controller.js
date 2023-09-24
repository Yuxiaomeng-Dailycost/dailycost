const UserService = require("../services/user.service");

const UserController = {
  login: async (req, res) => {
    var result = await UserService.findByEmailAndPassword(req.body);
    // result = req.body;
    if (result == null) {
      res.json({
        code: -1,
        error: "invalid username or password",
      });
    } else {
      return res.json({
        code: 1,
      });
    }
  },
};

module.exports = UserController;
