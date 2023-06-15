const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const PORT = 3000;

const recipeRouter = require("./routers/reciperouter");

const dbpath =
  process.env.NODE_ENV === "production"
    ? "mongodb://localhost/yummyjuice"
    : "mongodb://localhost/fakeyummyjuice";

mongoose.connect(dbpath);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, './client')));

app.use("/api", recipeRouter);

app.use("*", (req, res) => {
  res.status(400).send("No Found!");
});

app.use("/api", (err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
