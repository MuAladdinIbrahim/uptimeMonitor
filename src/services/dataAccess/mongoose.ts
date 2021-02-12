import configs from "../../configs";
import mongoose from "mongoose";
let database: mongoose.Connection;
export const connect = () => {
  if (database) {
    return;
  }
  mongoose
    .connect(configs.MONGODB_URL, configs.MONGODB_OPTIONS)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error: any) => {
      console.log(`Error connecting to database ${error}`);
    });
};
export const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
};
