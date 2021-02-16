import { alerter } from "../alerter/";
import { ICheck } from "../check/Abstract/ICheck";

export const isUp = (check: ICheck, response: any, state: any) => {
  //update state, status and check info in database
  // send to alerter the check and the action
  alerter.alertAbout(check);
};
export const isDown = (check: ICheck, response: any, state: any) => {};
export const isStop = (check: ICheck, response: any, state: any) => {};
export const isError = (check: ICheck, response: any, state: any) => {};
export const isTimeout = (check: ICheck, response: any, state: any) => {};
