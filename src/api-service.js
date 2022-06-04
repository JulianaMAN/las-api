const fetch = require("node-fetch");

<<<<<<< HEAD
async function listarProdutosAPI() {
  const response = await fetch(
    "https://stupefied-keller-a2c79e.netlify.app/produtos.json"
  );

  if (response.status === 200) {
    return await response.json();
  } else {
    throw new Error(`${response.statusText}: ${response.status}`);
  }
}

async function listarCategoriasAPI() {
  const response = await fetch(
    "https://stupefied-keller-a2c79e.netlify.app/categorias.json"
  );

  if (response.status === 200) {
    return await response.json();
  } else {
    throw new Error(`${response.statusText}: ${response.status}`);
  }
}

async function listarCuponsAPI() {
  const response = await fetch(
    "https://stupefied-keller-a2c79e.netlify.app/cupons.json"
  );

  if (response.status === 200) {
    return await response.json();
  } else {
    throw new Error(`${response.statusText}: ${response.status}`);
  }
}

module.exports = { listarProdutosAPI, listarCategoriasAPI, listarCuponsAPI };
=======
async function listarProdutos(){
    const response = await fetch("https://stupefied-keller-a2c79e.netlify.app/produtos.json");
    if (response.status !== 200) {
        throw new Error(`${response.statusText}: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

async function listarCategorias() {
    const response = await fetch("https://stupefied-keller-a2c79e.netlify.app/categorias.json");
    if (response.status !== 200) {
        throw new Error(`${response.statusText}: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

async function listarCupons(){
    const response = await fetch("https://stupefied-keller-a2c79e.netlify.app/cupons.json");
    if (response.status !== 200) {
        throw new Error(`${response.statusText}: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
}



module.exports = {
    listarProdutos, listarCategorias , listarCupons
};
>>>>>>> 222afe43febb8a5bf8463b4af5406833f275d8fd
