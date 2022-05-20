const query = require("../infraestrutura/database/queries");

class Usuario {
  adicionar(usuario) {
    const sql = "INSERT INTO Usuarios SET ?";
    return query(sql, usuario);
  }

  listar() {
    const sql = "SELECT * FROM Usuarios";
    return query(sql);
  }

  async atualizaUsuarioId(usuarioId, valores) {
    const sql = "UPDATE usuarios SET ? WHERE id = ?";
    console.log(valores);
    return query(sql, [valores, usuarioId]);
  }

  buscarUsuarioId(usuarioId) {
    const sql = `SELECT nomeCompleto, dataNascimento, rg, cpf FROM WHERE id = ${usuarioId}`;
    console.log(sql);
    return query(sql);
  }
}

module.exports = new Usuario();