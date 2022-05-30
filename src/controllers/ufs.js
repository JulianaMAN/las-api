const UFs = require("../models/ufs");

module.exports = (app) => {
app.get("/ufs",(req, res, next) => {
    UFs.listar()
      .then((resultados) => res.json(resultados))
      .catch((erros) => next(erros));
  });  

};