import express from "express";
import routers from "./modules/routers";
import configs from "./configs";
import { connect } from "./lib/dataAccess/mongoDB/mongoose";
import bodyParser from "body-parser";
import { initMonitor } from "./modules/monitor";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

for (const route of routers) {
  app.use(route.path, route.router);
}

connect(); // to MonogoDB
initMonitor()

app.listen(configs.SERVER_PORT, () => {
  console.log(`server started at ${configs.SERVER_URL}:${configs.SERVER_PORT}`);
});
