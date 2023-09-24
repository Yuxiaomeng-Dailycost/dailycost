const { prismaMock } = require("../src/lib/prismaMock");
const UserService = require("../src/services/user.service");

const user = {
  email: "yuxiaomeng",
  password: "20230919.y",
};

describe("test user service", () => {
  // Actually we don't need this test. This is only an example for how to use prismaMock.
  // Because userService.findByEmailAndPassword() only call the prisma
  it("can find user when user exists", async () => {
    prismaMock.user.findUnique.mockResolvedValue(user);
    const myUser = await UserService.findByEmailAndPassword(user);
    expect(myUser).not.toBeNull;
  });
});
