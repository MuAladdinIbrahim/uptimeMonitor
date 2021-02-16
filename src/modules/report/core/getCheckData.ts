import { ICheck } from "../../check/Abstract/ICheck";

export const getCheckDataForReport = async (checks: ICheck[]): Promise<any> => {
    // checkData.check,
    // checkData.status,
    // checkData.availability,
    // checkData.outages,
    // checkData.downtime,
    // checkData.updates,
    // checkData.responseTime,
    // checkData.history
    let checksData = [];
    for (let check of checks) {
        checksData.push({ })
    }
}