module.exports = function (app, mongoose) {
  require("./user")(app);
  require("./item")(app);
  require("./shopping")(app, mongoose);
  require("./truck")(app);
  require("./trip")(app, mongoose);
  require("./order")(app);
};
