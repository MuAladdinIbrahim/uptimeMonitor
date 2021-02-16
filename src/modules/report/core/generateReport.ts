import { get } from "mongoose";
import { IUser } from "../../../lib/dataAccess/mongoDB/user/model";
import { CheckStatus } from "../../check/Abstract/enum";
import { ICheck } from "../../check/Abstract/ICheck";
import { getChecksByTags } from "../../check/core/checksByTags";
import { getChecksForUser } from "../../check/core/checksForUser";
import { getCheck } from "../../check/core/getCheck";
import { User } from "../../user/Abstracts/types";
import { IReport } from "../Abstract/IReport";
import { getCheckDataForReport } from "./getCheckData";

//get report of checks for user by  checks tags or by user

export const generateReports = async (
  user?: IUser,
  tags?: string[]
): Promise<IReport[]> => {
  let reports: IReport[] = [];
  let checks: ICheck[] = [];
  if (user) checks = await getChecksForUser(user);
  if (tags && Array.isArray(tags) && tags.length > 0)
    checks = await getChecksByTags(tags);
  const checksData = await getCheckDataForReport(checks);
  for (const checkData of checksData) {
    reports.push(
      formatReport(
        checkData.check,
        checkData.status,
        checkData.availability,
        checkData.outages,
        checkData.downtime,
        checkData.updates,
        checkData.responseTime,
        checkData.history
      )
    );
  }
  return reports;
};

const formatReport = (
  check: ICheck,
  status: CheckStatus,
  availability: Number,
  outages: Number,
  downtime: Number,
  updates: Number,
  responseTime: Number,
  history: String
): IReport => {
  return {
    check,
    status,
    availability,
    outages,
    downtime,
    updates,
    responseTime,
    history,
  };
};
