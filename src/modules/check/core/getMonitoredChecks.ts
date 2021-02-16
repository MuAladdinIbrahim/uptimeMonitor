import { CheckState } from "../Abstract/enum";
import { repo } from "../repo";

export const getAllMonitoredChecks = async () => {
  return await repo
    .getAll({
      $or: [{ state: CheckState.MONITORED }, { state: CheckState.PENDING }],
    })
    .then((checks) => checks)
    .catch((err) => {
      throw err;
    });
};
