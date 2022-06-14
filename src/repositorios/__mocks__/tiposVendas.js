const tiposVendasMock = require("./tiposVenda.json");

class TiposVendas {
    listar() {
        return Promise.resolve(tiposVendasMock);
      }

    buscarPorId(id) {
        return Promise.resolve(tiposVendasMock.find((venda) => venda.id === id));    
      }
      
    alterar(id) {
        return Promise.resolve(tiposVendasMock.find((tiposvendas) => tiposvendas.id === id));
      }  
    
      excluir(id) {
        return Promise.resolve(tiposVendasMock.find((tiposvendas) => tiposvendas.id === id));
      }
}

module.exports = new TiposVendas();

