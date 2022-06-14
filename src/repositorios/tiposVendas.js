const query = require("../infraestrutura/database/queries");

class Venda {
  adicionar({id, descricao}) {
    const sql = "INSERT INTO tiposvendas SET ?";
    return query(sql, {id, descricao});
  }

  excluir(id) {
    const sql = "DELETE FROM tiposvendas WHERE id = ?";
    return query(sql,id);
  }

  async alterar(id,valores) {
    const sql = "UPDATE tiposvendas SET ? WHERE id = ?";
    return query(sql,[valores, id]);
  }

}

module.exports = new Venda();