// status - The current status of the URL.
// availability - A percentage of the URL availability.
// outages - The total number of URL downtimes.
// downtime - The total time, in seconds, of the URL downtime.
// uptime - The total time, in seconds, of the URL uptime.
// responseTime - The average response time for the URL.
// history - Timestamped logs of the polling requests.

import { CheckStatus } from "../../check/Abstract/enum";
import { ICheck } from "../../check/Abstract/ICheck";

export interface IReport {
    check: ICheck
    status: CheckStatus
    availability: Number
    outages:  Number
    downtime: Number
    updates: Number
    responseTime: Number
    history: String
}