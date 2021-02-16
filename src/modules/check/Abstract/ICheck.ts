import { IUser } from "../../../services/dataAccess/mongoDB/user/model";
import { CheckState, Protocol } from "./enum";

export interface ICheck {
  name: string;
  url: string;
  protocol: Protocol;
  state: CheckState;
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
  user?: IUser;
}

