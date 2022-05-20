class Tabelas {
    init(pool) {
      this.pool = pool;
  
      this.criarUsuarios();
      this.criarEventos();
      this.criarTiposVendas();
  
    }
  
    criarUsuarios() {
      const sql =
        `CREATE TABLE IF NOT EXISTS Usuarios(
          id INT AUTO_INCREMENT NOT NULL,
          nome VARCHAR(100) NOT NULL,
          urlFotoPerfil text,
          
          nomeCompleto VARCHAR(100),
          dataNascimento date,
          rg VARCHAR(20),
          cpf VARCHAR(11),
          
          telefone VARCHAR(10),
          celular VARCHAR(11),
          email VARCHAR(100),

          senha VARCHAR(20),
          
          cep VARCHAR(8),
          endereco VARCHAR(100),
          numero int,
          complemento VARCHAR(100),
          bairro VARCHAR(50),
          PRIMARY KEY(id))`;
  
      this.pool.query(sql, (erro) => {
        if (erro) {
          console.log(erro);
        } else {
          console.log("Tabela Usuarios criada com sucesso");
        }
      });
    }
    criarEventos() {
      const sql =
        "CREATE TABLE IF NOT EXISTS Evento(id INT AUTO_INCREMENT NOT NULL, nome varchar(100) NOT NULL, descricao text, urlFoto text, dataInicio date, dataFim date,status varchar(50), PRIMARY KEY(id))";
      
      this.pool.query(sql, (erro) => {
        if (erro) {
          console.log(erro);
        } else {
          console.log("Tabela Eventos criada com sucesso");
        }
      });
    }

    criarTiposVendas() {
      const sql =
        "CREATE TABLE IF NOT EXISTS tiposVendas(id int(32) NOT NULL, descricao text, PRIMARY KEY(id))";
  
      this.pool.query(sql, (erro) => {
        if (erro) {
          console.log(erro);
        } else {
          console.log("Tabela Tipos de Vendas criada com sucesso");
        }
      });
    }
}
  
  module.exports = new Tabelas();