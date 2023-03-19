module.exports = function (app) {
  require("./user")(app);
  require("./item")(app);
  require("./shopping").routes(app);
  require("./truck")(app);
  require("./trip").routes(app);
  require("./order")(app);
};
