const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const UserService = {
  login: async ({ email, password }) => {
    // if (username === "yuxiaomeng" && password === "2023") {
    //   console.log("login success");
    //   return "login success";
    // }
    const user = await prisma.user.findUnique({
      where: {
        email: `${email}`,
        password: `${password}`,
      },
    });
    return user;
    // return "invalid user or password";
  },
};

module.exports = UserService;
