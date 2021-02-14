import Router from "express";
const router = Router();
import { success, validation, error } from "../../helpers/response";
import { isLoggedIn } from "../user/middleware/isLoggedIn";
import { addCheck } from "./core/addCheck";
import { validateAddCheckReq } from "./validation/addCheckReq";

router.post("/", isLoggedIn, ({ body: { check, user } }, res) => {
  try {
    const { error } = validateAddCheckReq(check);
    if (error) {
      res.status(422).json(validation(error));
    }
    const result = addCheck(check, user);
    result
      ? res.status(201).json(success("created", result, 200))
      : res.status(409).json(success("can't process request now", result, 409));
  } catch (err) {
    res.status(400).json(error(err, 400));
  }
});

export default { path: "/check", router };
