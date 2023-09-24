const UserController = require("../src/controllers/user.controller");
const UserService = require("../src/services/user.service");
const user = require("./fixtures/user");
const { mockRequest, mockResponse } = require("./utils/expressMock");
jest.mock("../src/services/user.service");

describe("my first test", () => {
  it("should successfully login with correct username and password", async () => {
    const req = mockRequest({ body: user });
    const res = mockResponse();

    await UserService.findByEmailAndPassword.mockResolvedValueOnce(user);
    await UserController.login(req, res);

    expect(res.json).toHaveBeenCalledWith({ code: 1 });
  });

  it("should get error code with invalid username and password", async () => {
    const req = mockRequest({ body: user });
    const res = mockResponse();

    await UserService.findByEmailAndPassword.mockResolvedValueOnce();
    await UserController.login(req, res);

    expect(res.json).toHaveBeenCalledWith({
      code: -1,
      error: "invalid username or password",
    });
  });
});
