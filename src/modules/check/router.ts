import Router from "express";
const router = Router();
import { success, validation, error } from "../../helpers/response";
import { isLoggedIn } from "../user/middleware/isLoggedIn";
import { addCheck } from "./core/addCheck";
import { deleteCheck } from "./core/deleteCheck";
import { editCheck } from "./core/editCheck";
import { pauseCheck } from "./core/pauseCheck";
import { validateAddCheckReq } from "./validation/addCheckReq";
import { validateCheckIdCheckReq } from "./validation/deleteCheckReq";
import { validateEditCheckReq } from "./validation/editCheckReq";

router.post("/", isLoggedIn, async ({ body: { check, user } }, res) => {
  try {
    const { error } = validateAddCheckReq(check);
    if (error) {
      res.status(422).json(validation(error));
    }
    const result = await addCheck(check, user);
    result
      ? res.status(201).json(success("created", result, 200))
      : res.status(409).json(success("can't process request now", result, 409));
  } catch (err) {
    res.status(400).json(error(err, 400));
  }
});

// IGNORE case of user can only update or delete his own checks

router.put("/", isLoggedIn, async ({ body: { checkId, updates } }, res) => {
  try {
    const reqBody = { checkId, updates };
    const { error } = validateEditCheckReq(reqBody);
    if (error) {
      res.status(422).json(validation(error?.details[0]?.message || error));
    }
    const result = await editCheck(reqBody.checkId, reqBody.updates);
    result
      ? res.status(200).json(success("updated", result, 200))
      : res.status(409).json(success("can't process request now", result, 409));
  } catch (err) {
    console.log({ err });
    res.status(400).json(error(err, 400));
  }
});

router.delete("/", isLoggedIn, async ({ body: { checkId } }, res) => {
  try {
    const reqBody = { checkId };
    const { error } = validateCheckIdCheckReq(reqBody);
    if (error) {
      res.status(422).json(validation(error?.details[0]?.message || error));
    }
    const result = await deleteCheck(reqBody.checkId);
    result
      ? res.status(200).json(success("deleted", result, 200))
      : res.status(409).json(success("can't process request now", result, 409));
  } catch (err) {
    console.log({ err });
    res.status(400).json(error(err, 400));
  }
});

router.put("/pause", isLoggedIn, async ({ body: { checkId } }, res) => {
  try {
    const reqBody = { checkId };
    const { error } = validateCheckIdCheckReq(reqBody);
    if (error) {
      res.status(422).json(validation(error?.details[0]?.message || error));
    }
    const result = await pauseCheck(reqBody.checkId);
    result
      ? res.status(200).json(success("paused", result, 200))
      : res.status(409).json(success("can't process request now", result, 409));
  } catch (err) {
    console.log({ err });
    res.status(400).json(error(err, 400));
  }
});

export default { path: "/check", router };
