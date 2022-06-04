<<<<<<< HEAD
const { listarProdutosAPI, listarCategoriasAPI } = require("./api-service");

async function processarOpcao(opcao) {
  switch (opcao) {
    case "produtos":
      return await listarProdutosAPI();
    case "categorias":
      return await listarCategoriasAPI();
    case "produtos-formatados":
      return formatarPrecoProdutos(await listarProdutosAPI());
    case "descontos":
      var produtosFormatados = formatarPrecoProdutos(await listarProdutosAPI());
      var categorias = await listarCategoriasAPI();
      var produtosComDesconto = adicionaDescontoCategoria(
        produtosFormatados,
        categorias
      );

      return produtosComDesconto;
    case undefined:
      throw new Error("Informe uma opção.");
    default:
      throw new Error(`Opção inválida: ${opcao}`);
  }
=======
const { listarProdutos, listarCategorias } = require("./api-service");
const { formatarValor } = require("./objetos");

async function processarOpcao(opcao) {
  console.log(`A opção digitada foi: ${opcao}`);
  let retorno;
  let produtos;
  let categorias;

  switch (opcao.toUpperCase()) {
    case "PRODUTOS":
      retorno = await listarProdutos();
      break;
    case "DESCONTOS":
      produtos = formataValorProdutos(await listarProdutos());
      categorias = await listarCategorias();

      retorno = produtos.map((p) => {
        const categoria = categorias.find((c) => p.categoria === c.nome);
        return { ...p, desconto: categoria?.desconto || 0 };
      });
      break;
    default:
      throw new Error(`Opção inválida: ${opcao}`);
      
  }
  return retorno;
}

function formataValorProdutos(produtos) {
  return produtos.map((p) => ({ ...p, preco: formatarValor(p.preco) }));
>>>>>>> 222afe43febb8a5bf8463b4af5406833f275d8fd
}

async function run() {
  const opcao = process.argv[2];
  const saida = await processarOpcao(opcao);
  console.table(saida);
}

if (require.main === module) {
  run();
}

function formatarPrecoProdutos(listaProdutos) {
  let listaProdutosFormatados = JSON.parse(JSON.stringify(listaProdutos));
  listaProdutosFormatados.forEach((produto) => {
    produto.preco = formataPreco(produto.preco);
  });

  return listaProdutosFormatados;
}

function formataPreco(preco) {
  return `R$ ${parseFloat(preco).toFixed(2).toString().replace(".", ",")}`;
}

function adicionaDescontoCategoria(listaProdutos, categorias) {
  let listaProdutosComDesconto = JSON.parse(JSON.stringify(listaProdutos));

  listaProdutosComDesconto.forEach((produto) => {
    const indexCategoria = categorias.findIndex(
      (categoria) => categoria.nome === produto.categoria
    );

    produto.desconto =
      indexCategoria !== -1 ? categorias[indexCategoria].desconto : 0;
  });
  return listaProdutosComDesconto;
}

module.exports = {
  processarOpcao,
<<<<<<< HEAD
  formatarPrecoProdutos,
};
=======
};
>>>>>>> 222afe43febb8a5bf8463b4af5406833f275d8fd
