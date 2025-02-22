const tiposVendas = require("../models/tiposVendas");
const Venda = require("../models/tiposVendas");

module.exports = (app) => {
app.get("/tipos-vendas",(_req, res, next) => {
    Venda.listar()
      .then((resultados) => res.json(resultados)).catch((erros) => next(erros));
  });  

  app.get("/tipos-vendas/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    Venda.buscarPorId(id)
    .then((venda) => (venda ? res.json(venda) : res.status(404).send())).catch((erros) => next(erros));
  });  

  app.post("/tipos-vendas", (req, res, next) => {
    const venda = req.body;
    Venda.adicionar(venda).then((resultados) => res.status(201).json(resultados)).catch((erros) => next(erros));
  });

  app.put("/tipos-vendas/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    return tiposVendas.alterar(id, valores, res, next)
    .then((resultado) => { 
      if (resultado) {
        return res.json(valores);
      }
       return res.status(404).end();
    })
    .catch((erros) => next(erros));
  });

  app.delete("/tipos-vendas/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    tiposVendas.excluir(id)
    .then((resultado) => { 
      if (resultado) {
        return res.status(204).end();
      }
       return res.status(404).end();
    })
    .catch((erros) => next(erros));
  });
  
};