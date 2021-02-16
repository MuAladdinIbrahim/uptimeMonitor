import { Alerter } from "./Alerter";
import { IChannel } from "./channel/IChannel";

const channels: IChannel[] = [{name: ""}]
export const alerter = Alerter.getInstance(channels);