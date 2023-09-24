const prisma = require("../lib/client");

const UserService = {
  findByEmailAndPassword: async ({ email, password }) => {
    const user = await prisma.user.findUnique({
      where: {
        email: `${email}`,
        password: `${password}`,
      },
    });
    return user;
  },
};

module.exports = UserService;
