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

//   listar() {
//       const sql ="SELECT * FROM tiposVendas";
//       return query(sql);
//   }

//   buscarPorId(id) {
//     const sql =
//       "SELECT descricao FROM tiposVendas WHERE id = ?";
//     return query(sql, id).then((data) => data[0]);
// }

}

module.exports = new Venda();