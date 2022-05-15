import express from "express";
import "./database";
import Account from "./models/Accounts";
const querystring = require("querystring");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/accounts/create", async (req, res) => {
  const account = new Account(req.body);

  const savedAccount = await account.save();
  console.log(savedAccount);
  res.send("saved");
});

app.listen(4000);
console.log("server on port", 4000);
