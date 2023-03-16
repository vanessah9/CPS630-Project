module.exports = function (app) {
  require("./user")(app);
  require("./item")(app);
};
