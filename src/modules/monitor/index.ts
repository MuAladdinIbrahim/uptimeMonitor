import { alerter } from "../alerter/";
import { CheckStatus } from "../check/Abstract/enum";
import { ICheck } from "../check/Abstract/ICheck";

export const isUp = (check: ICheck, response: any, state: any) => {
  //update state, status and check info in database
  // send to alerter the check and the action
  alerter.alertAbout(check, state, CheckStatus.UP);
};
export const isDown = (check: ICheck, response: any, state: any) => {
  alerter.alertAbout(check, state, CheckStatus.UP);
};
export const isStop = (check: ICheck, response: any, state: any) => {
  alerter.alertAbout(check, state, CheckStatus.UP);
};
export const isError = (check: ICheck, response: any, state: any) => {
  alerter.alertAbout(check, state, CheckStatus.UP);
};
export const isTimeout = (check: ICheck, response: any, state: any) => {
  alerter.alertAbout(check, state, CheckStatus.UP);
};
