import { ICheck } from "../../modules/check/Abstract/ICheck";
import * as checkStatus from "../../modules/monitor";

const Monitor = require("ping-monitor");

// for every created check, add it to monitoredChecks :D

export const Ping = (checks: ICheck[]) => {
  checks.map((check: ICheck) => {
    let options = {
      website: check.url,
      interval: 30,
      // expect: "",
      config: {
        intervalUnits: "seconds",
        generateId: false, // defaults is true
      },
    };
    const ping = new Monitor(options);

    ping.on("up", function (response: any, state: any) {
      // Do something with the response
      console.log("up");
      console.log({ response });
      console.log({ state });
      checkStatus.isUp(check, response, state);
    });
    ping.on("down", function (response: any, state: any) {
      // Do something with the response
      console.log("d");
      console.log({ response });
      console.log({ state });
      checkStatus.isDown(check, response, state);
    });
    ping.on("stop", function (response: any, state: any) {
      // Do something with the response
      console.log("s");
      console.log({ response });
      console.log({ state });
      checkStatus.isStop(check, response, state);
    });
    ping.on("error", function (response: any, state: any) {
      // Do something with the response
      console.log("e");
      console.log({ response });
      console.log({ state });
      checkStatus.isError(check, response, state);
    });
    ping.on("timeout", function (response: any, state: any) {
      // Do something with the response
      console.log({ response });
      console.log({ state });
      checkStatus.isTimeout(check, response, state);
    });
  });
};
