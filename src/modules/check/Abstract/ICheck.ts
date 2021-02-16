import { IUser } from "../../../lib/dataAccess/mongoDB/user/model";
import { CheckState, CheckStatus, Protocol } from "./enum";

export interface ICheck {
  name: string;
  url: string;
  protocol: Protocol;
  user: IUser;
  state: CheckState;
  status: CheckStatus;
  path?: string;
  port?: number;
  webhook?: string;
  timeout?: number;
  interval?: number;
  threshold?: number;
  authentication?: {
    username: string;
    password: string;
  };
  httpHeaders?: {
    key: string;
    value: string;
  };
  assert?: {
    statusCode: number;
  };
  tags?: string[];
  ignoreSSL?: boolean;
}

