import { Alerter } from "./Alerter";
import { IChannel } from "../channel/Abstract/IChannel";

const channels: IChannel[] = [{name: ""}]
export const alerter = Alerter.getInstance(channels);