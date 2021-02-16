import { Ping } from "../../lib/ping-monitor/ping";
import { ICheck } from "../check/Abstract/ICheck";
import { isDownHandler } from "./handler/isDownHandler";
import { isErrorHandler } from "./handler/isErrorHandler";
import { isStopHandler } from "./handler/isStopHandler";
import { isTimeoutHandler } from "./handler/isTimeoutHandler";
import { isUpHandler } from "./handler/isUpHandler";

export const watch = (...checks: ICheck[]) => {
  Ping(checks);
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
