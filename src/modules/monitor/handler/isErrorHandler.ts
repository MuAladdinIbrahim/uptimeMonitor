import { alerter } from "../../alerter";
import { CheckStatus } from "../../check/Abstract/enum";
import { ICheck } from "../../check/Abstract/ICheck";
import { changeStatus } from "../../check/core/changeStatus";
import { getCheck } from "../../check/core/getCheck";

export const isErrorHandler = async (check: ICheck, response: any, state: any) => {
  try {
    const savedCheck = await getCheck(check);
    if (savedCheck.status !== CheckStatus.ERROR) {
      changeStatus(check, CheckStatus.ERROR);
      alerter.alertAbout(check, state, CheckStatus.ERROR);
    }
  } catch (err) {
    // log error
  }
}