const Eventos = require("../models/eventos");


module.exports = (app) => {
    app.get("/eventos", (req, res, next) => {
        Eventos.listar()
          .then((resultados) => res.json(resultados))
          .catch((erros) => next(erros));
      });

      app.get("/eventos/:id", (req, res, next) => {
        const id = parseInt(req.params.id);
        Eventos.buscarPorId(id, res, next);
      });  

};