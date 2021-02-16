import { Ping } from "../../lib/ping-monitor/ping";
import { CheckState } from "../check/Abstract/enum";
import { ICheck } from "../check/Abstract/ICheck";
import { changeStatus } from "../check/core/changeStatus";
import { editCheck } from "../check/core/editCheck";
import { getAllMonitoredChecks } from "../check/core/getMonitoredChecks";
import { isDownHandler } from "./handler/isDownHandler";
import { isErrorHandler } from "./handler/isErrorHandler";
import { isStopHandler } from "./handler/isStopHandler";
import { isTimeoutHandler } from "./handler/isTimeoutHandler";
import { isUpHandler } from "./handler/isUpHandler";

export const initMonitor = async () => {
  const savedChecks = await getAllMonitoredChecks()
    .then((checks) => checks)
    .catch((err) => {
      throw err;
    });
  watch(...savedChecks);
};

export const watch = (...checks: ICheck[]) => {
  Ping(checks);
  for (let check of checks) {
    editCheck(check, { state: CheckState.MONITORED });
  }
};
export const isUp = (check: ICheck, response: any, state: any) => {
  isUpHandler(check, response, state);
};
export const isDown = (check: ICheck, response: any, state: any) => {
  isDownHandler(check, response, state);
};
export const isStop = (check: ICheck, response: any, state: any) => {
  isStopHandler(check, response, state);
};
export const isError = (check: ICheck, response: any, state: any) => {
  isErrorHandler(check, response, state);
};
export const isTimeout = (check: ICheck, response: any, state: any) => {
  isTimeoutHandler(check, response, state);
};
