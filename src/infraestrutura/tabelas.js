class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarUsuarios();
    }

    criarUsuarios() {
        const sql = "CREATE TABLE IF NOT EXISTS Usuários (id int NOT NULL AUTO_INCREMENT, nome varchar(100) NOT NULL, urlFotoPerfil text, PRIMARY KEY(id))";
    
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro);
            } else {
                console.log("Tabela Usuários criada com sucesso");
            }
        });
    }
}

module.exports = new Tabelas;