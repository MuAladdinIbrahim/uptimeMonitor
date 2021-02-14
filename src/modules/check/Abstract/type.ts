import { Protocol } from "./enum";

export type UpdateCheckReq = {
    name?: string;
    url?: string;
    protocol?: Protocol;
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