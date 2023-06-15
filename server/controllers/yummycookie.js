const yummyCookie = {};

yummyCookie.createCookie = (req, res, next) => {
  res.cookie("cookieId", res.locals.user._id, { httpOnly: true });
  return next();
};

module.exports = yummyCookie;
