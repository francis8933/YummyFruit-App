const UserDb = require('../models/usermodel.js');
const recipeDb = require('../models/recipe.js');

const yummyController = {};

yummyController.createUser = (req, res, next) => {
  const { userName, password } = req.body;
  console.log('getting in create User');
  UserDb.create({ userName, password })
    .then((data) => {
      res.locals.user = data;
      console.log(res.locals.user, 'getting out create user');
      return next();
    })
    .catch((err) => {
      console.log(err);
      next({ message: { err: 'User name not able' } });
    });
};

yummyController.findUser = (req, res, next) => {
  const { userName, password } = req.body;
  UserDb.find({ userName: userName })
    .then((data) => {
      res.locals.user = data[0];
      //console.log(res.locals.user);
      if (password === res.locals.user.password) {
        return next();
      } else {
        return next({ message: { err: 'Incorrect Password' } });
      }
    })
    .catch((err) => {
      next({ message: { err: 'User not found' } });
    });
};
yummyController.checkCookie = (req, res, next) => {
  if (req.cookie) {
    UserDb.find({ userName: userName })
      .then((data) => {
        res.locals.user = data[0];
        return next();
      })
      .catch((err) => {
        next({ message: { err: 'User not found' } });
      });
  } else {
    return res.redirect('/login');
  }
};

yummyController.newRecipes = (req, res, next) => {
  const { basefruit, secundaryfruit, baseveggie, secundaryveggie, herb } =
    req.body;

  const newRecipe = recipeDb.create({
    basefruit,
    secundaryfruit,
    baseveggie,
    secundaryveggie,
    herb,
  });

  const cookieId = req.cookies.id;
  UserDb.find({ _id: cookieId })
    .then((data) => {
      res.locals.user = data[0];
      res.locals.user.recipes.push(newRecipe);
      return next();
    })
    .catch((err) => {
      next({ message: { err: 'User not found' } });
    });
};

module.exports = yummyController;
