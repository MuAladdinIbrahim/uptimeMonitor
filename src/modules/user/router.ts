import Router from "express";
import { success, validation, error } from "../../helpers/response";
import { register } from "./core/register";
import { verify } from "./core/emailVerification";
import {
  validateRegisterReq,
  validateLoginReq,
} from "./validation/validatehttpReq";
import { login } from "./core/login";
import { isLoggedIn } from "./middleware/isLoggedIn";
const router = Router();

router.post("/register", async ({ body }, res) => {
  try {
    const { error } = validateRegisterReq(body);
    if (error) {
      res.status(422).json(validation(error));
    }
    const result = await register(body);
    res.status(201).json(success("created", result, 201));
  } catch (err) {
    res.status(400).json(error(err, 400));
  }
});
router.get(
  "/verify/:verificationCode",
  async ({ params: { verificationCode } }, res) => {
    try {
      const isVerified: any = await verify(verificationCode);
      isVerified
        ? res.status(200).json(success("Verified", isVerified, 200))
        : res.status(409).json(success("can't verify it now", isVerified, 409));
    } catch (err) {
      res.status(400).json(error(err, 400));
    }
  }
);

router.post("/login", async ({ body }, res) => {
  try {
    const { error } = validateLoginReq(body);
    if (error) {
      res.status(422).json(validation(error));
    }
    const result = await login(body);
    result
      ? res
          .status(200)
          .json(success("you're logged in", { token: result }, 200))
      : res.status(409).json(success("can't log you in now", result, 409));
  } catch (err) {
    res.status(400).json(error(err, 400));
  }
});

router.get('/test',isLoggedIn, (req, res) => {
  res.send("hi")
})

export default { path: "/user", router };
