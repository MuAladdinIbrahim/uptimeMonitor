import { alerter } from "../../alerter";
import { CheckStatus } from "../../check/Abstract/enum";
import { ICheck } from "../../check/Abstract/ICheck";
import { changeStatus } from "../../check/core/changeStatus";
import { getCheck } from "../../check/core/getCheck";

export const isDownHandler = async (check: ICheck, response: any, state: any) => {
  try {
    const savedCheck = await getCheck(check);
    if (savedCheck.status !== CheckStatus.DOWN) {
      changeStatus(check, CheckStatus.DOWN);
      alerter.alertAbout(check, state, CheckStatus.DOWN);
    }
  } catch (err) {
    // log error
  }
}