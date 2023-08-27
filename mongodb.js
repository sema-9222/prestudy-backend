import { MongoClient, ServerApiVersion } from "mongodb";
import { config } from "./config";

export const mongo = new MongoClient(config.dbConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

mongo.connect().then(() => {
  console.log("DB connected");
});
