import { IUser } from "../../lib/dataAccess/mongoDB/user/model";
import { CheckStatus } from "../check/Abstract/enum";
import { ICheck } from "../check/Abstract/ICheck";
import { IChannel } from "./channel/IChannel";

export class Alerter {
  private static alerter: Alerter;
  private constructor(private channels: IChannel[]) {}
  public static getInstance(channels: IChannel[]) {
    if (!Alerter.alerter) {
      Alerter.alerter = new Alerter(channels);
    }
    return Alerter.alerter;
  }
  addChannel(channel: IChannel) {}
  removeChannel(channel: IChannel) {}
  alertAbout(check: ICheck,state:any,status: CheckStatus) {
    this.channels.forEach((channel: IChannel) => {});
  }
}

