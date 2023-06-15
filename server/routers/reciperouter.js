const express = require("express");
const app = express();
const path = require("path");
const recipeRouter = express.Router();
const yummyController = require("../controllers/yummycontroller");
const yummyCookie = require("../controllers/yummycookie.js");

// recipeRouter.get("/create", (req, res) => {
//   //should i redirect?
//   res.status(200);
// });
recipeRouter.post(
  "/create",
  yummyController.createUser,
  yummyCookie.createCookie,
  (req, res) => {
    res.redirect("/account");
    //res.redirect('/account');
  }
);
// recipeRouter.get("/login", (req, res) => {
//   res.status(200);
// });

recipeRouter.post(
  "/login",
  yummyController.findUser,
  yummyCookie.createCookie,
  (req, res) => {
    res.redirect("/account");
  }
);

recipeRouter.get("/account", yummyController.checkCookie,(req, res) => {
  if (res.locals.user.recipes.length > 0) {
    return res.status(200).json(res.locals.user.recipes);
  } else {
    return res.redirect("/createrecipe");
  }
});

recipeRouter.post("/createrecipe", yummyController.newRecipes, (req, res) => {
  res.redirect("/account");
});

module.exports = recipeRouter;
