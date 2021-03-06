const controller = require("../controllers/bi_db.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/bi/dim_data",controller.getDimTablesData);
  app.get("/api/bi/fact_data",controller.getFactTablesData);
  app.post("/api/bi/sql",controller.ExecSql);

};
