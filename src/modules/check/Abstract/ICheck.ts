export interface ICheck {
  name: string;
  url: string;
  protocol: Protocol;
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

enum Protocol {
  HTTP = "HTTP",
  HTTPS = "HTTPS",
  TCP = "TCP",
}
