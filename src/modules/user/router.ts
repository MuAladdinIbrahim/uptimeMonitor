import Router from "express";
import { success, validation, error } from "../../helpers/response";
import { register } from "./core/register";
import { validateRegisterReq } from "./validation/ValidatehttpReq";
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
router.post("/verify", async ({ body }, res) => {
  try {
    const { error } = validateRegisterReq(body);
    if (error) {
      res.status(422).json(validation(error));
    }
    const result = await register(body);
    res.status(201).json(success("Verified", result, 201));
  } catch (err) {
    res.status(400).json(error(err, 400));
  }
});

router.post("/login", async ({ body }, res) => {});

export default { path: "/user", router };
