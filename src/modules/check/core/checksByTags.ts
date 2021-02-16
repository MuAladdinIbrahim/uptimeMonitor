import { repo } from "../repo";

export const getChecksByTags = async (tags: string[]) => {
  return await repo
    .getAll({ tag: { $all: tags } })
    .then((checks) => checks)
    .catch((err) => {
      throw err;
    });
};
