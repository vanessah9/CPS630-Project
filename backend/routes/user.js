module.exports = function (app, mongoose) {
  app.get("/user", (req, res) => {
    res.send("getUser");
  });

  app.post("/user", (req, res) => {
    res.send("postUser");
  });
};
