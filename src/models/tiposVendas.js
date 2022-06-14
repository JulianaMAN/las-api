const pool = require("../infraestrutura/database/conexao");
const repositorio = require("../repositorios/tiposVendas");

class Venda {
  listar() {
    return repositorio.listar();
  }

  buscarPorId(id) {
    return repositorio.buscarPorId(id);
  }
  
  async incluir(venda, res, next) {
    const descricaoEhValida = venda.descricao.length >= 5;
    (await this.validarDescricaoVenda(venda.descricao));

    const validacoes = [
      {
        nome: "descricao",
        valido: descricaoEhValida,
        mensagem: "Descricao contendo no minimo 5 caracteres",
      }
    ];
    const erros = validacoes.filter((campo) => !campo.valido);
    const existemErros = erros.length;

    if (existemErros) {
      res.status(400).json(erros);
    } else {
      const sql = "INSERT INTO tiposVendas SET ?";
   
      pool.query(sql, venda, (erro) => {
      if (erro) {
        next(erro);
      } else {
        res.status(200).json(venda);
      }
    });
  }
}

alterar(id, valores) {
  return repositorio.alterar(id,valores);
 }

async excluir(id) {
  return repositorio.excluir(id);
}

}
module.exports = new Venda();