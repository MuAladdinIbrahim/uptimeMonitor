import { connect, disconnect } from "../lib/dataAccess/mongoDB/mongoose";
import { login } from "../modules/user/core/login";
import { register } from "../modules/user/core/register";
import faker from "faker";
const loginMock = jest.fn(login);
const registerMock = jest.fn(register);

beforeAll(() => {
  connect();
});
afterAll(async (done) => {
  disconnect;
  done();
});

const username = faker.name.findName();
const email = faker.internet.email();
const password = faker.internet.password();
describe("user cases", () => {
  it("should allow user to register if data is valid", async () => {
    const credentials = { username, password, email };
    const registerRes = await registerMock(credentials);
    console.log(typeof registerRes);
    expect(typeof registerRes).toBe("object");
    expect(registerRes).toHaveProperty("_id");
  });
  it("should allow user to login if data is valid", async () => {
    const credentials = { username, password };
    const loginRes = await loginMock(credentials);
    console.log(loginRes);
    expect(typeof loginRes).toBe("string");
  });
  it("should not allow user to login if username is wrong", async () => {
    const credentials = { username: `${username}123`, password };
    const loginRes = await loginMock(credentials);
    expect(loginRes).toBeFalsy();
  });

  it("should not allow user to login if password is wrong", async () => {
    const credentials = { username: username, password: `${password}123` };
    const loginRes = await loginMock(credentials);
    expect(loginRes).toBeFalsy();
  });
});
