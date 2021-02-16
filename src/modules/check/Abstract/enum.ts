export enum Protocol {
  HTTP = "HTTP",
  HTTPS = "HTTPS",
  TCP = "TCP",
}

export enum CheckState {
  PENDING="PENDING",
  MONITORED = "MONITORED",
  PAUSED = "PAUSED",
  DELETED = "DELETED",
}

export enum CheckStatus {
  UP = "UP",
  DOWN = "DOWN",
  TIMEOUT = "TIMEOUT",
  ERROR = "ERROR",
  STOP = "STOP",
}
