const usuariosMock = require("./usuarios.json");

class Usuario {
  adicionar(usuario) {
    return Promise.resolve(usuario && { insertId: 99});
  }

  listar() {
    return Promise.resolve(usuariosMock);
  }

  excluir(id) {
    return Promise.resolve(usuariosMock.find((usuario) => usuario.id === id));
  }

  buscarPorId(id) {
    return Promise.resolve(usuariosMock.find((usuario) => usuario.id === id));    
  }

  isNomeUsuarioUtilizado(nome) {
    return Promise.resolve(
      !!usuariosMock.find((usuario) => usuario.nome === nome));  
  }

  buscarPorNome(nome) {
    return Promise.resolve(usuariosMock.filter((usuario) => usuario.nome === nome));    
  }
  
}

module.exports = new Usuario();