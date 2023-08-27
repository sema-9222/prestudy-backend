import express from "express";
const app = express();
const port = 8000;
import cors from "cors";
import { mongo } from "./mongodb.js";

app.use(express.json());

app.use(cors());

app.get("/name", (req, res) => {
  res.send("Sema");
});

app.post("/name/:newName", (req, res) => {
  res.send(req.params.newName);
});

app.post("/data", async (req, res) => {
  console.log(req.body);
  await mongo.db("Sema").collection("emotionalData").insertOne(req.body);
  res.send("Data recieved!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
