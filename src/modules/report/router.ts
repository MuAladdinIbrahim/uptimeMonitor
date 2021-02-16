import Router from "express";
import { isLoggedIn } from "../user/middleware/isLoggedIn";
import { generateReports } from "../report/core/generateReport";
import { validation, error, success } from "../../helpers/response";
import { repo } from "../user/repo";
import { IUser } from "../../lib/dataAccess/mongoDB/user/model";
const router = Router();

router.get("/:username", isLoggedIn, async ({ params: username }, res) => {
  try {
    if (!username) {
      res.status(422).json(validation("username is required"));
    }
    const user: IUser = await repo.getOne({ username });
    const result = await generateReports(user);
    res.status(200).json(success("success", result, 200));
  } catch (err) {
    res.status(400).json(error(err, 400));
  }
});

router.get("/:tag", isLoggedIn, async ({ params: { tag } }, res) => {
  try {
    if (!tag) {
      res.status(422).json(validation("tags is required"));
    }
    let tags = [];
    if (typeof tag === "string") {
      tags.push(tag);
    }
    if (Array.isArray(tag)) tags = tag;
    const result = await generateReports(undefined, tags);
    res.status(200).json(success("success", result, 200));
  } catch (err) {
    res.status(400).json(error(err, 400));
  }
});

export default { path: "/report", router };
