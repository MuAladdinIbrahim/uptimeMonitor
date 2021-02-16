import { CheckStatus } from "../check/Abstract/enum";
import { ICheck } from "../check/Abstract/ICheck";
import { IChannel } from "../channel/Abstract/IChannel";

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
    //TODO logic here 
    // 1) send data to each channel and each channel is responsible for formatting
    //    the message and send it to user
    this.channels.forEach((channel: IChannel) => {});
  }
}
