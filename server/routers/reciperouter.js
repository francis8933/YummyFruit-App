const express = require('express');
const app = express();
const path = require('path');
const recipeRouter = express.Router();
const yummyController = require('../controllers/yummycontroller.js');
const yummyCookie = require('../controllers/yummycookie.js');

// recipeRouter.get("/create", (req, res) => {
//   //should i redirect?
//   res.status(200);
// });
recipeRouter.post(
  '/create',
  yummyController.createUser,
  yummyCookie.createCookie,
  (req, res) => {
    return res.status(200).json(res.locals.user);
    //res.redirect('/account');
  }
);
// recipeRouter.get("/login", (req, res) => {
//   res.status(200);
// });

recipeRouter.post(
  '/login',
  yummyController.findUser,
  yummyCookie.createCookie,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  }
);

recipeRouter.get('/account', yummyController.checkCookie, (req, res) => {
  if (res.locals.user.recipes.length > 0) {
    return res.status(200).json(res.locals.user.recipes);
  } else {
    return res.redirect('/login');
  }
});

recipeRouter.post('/createrecipe', yummyController.newRecipes, (req, res) => {
  return res.status(200).json(res.locals.user_id);
});

module.exports = recipeRouter;
