import express from "express";
const app = express();
const port = 5000;

import mongoose from "mongoose";
mongoose
  .connect(
    "mongodb+srv://eunju:1@boilorplate.fhqq2.mongodb.net/boilorplate?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongooDB Connected ..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("hello world!"));

app.listen(port, () => console.log(`app started on port ${port}`));
