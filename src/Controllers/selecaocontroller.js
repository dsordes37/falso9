const prisma = require('../models/prismaClient');

async function sortearSelecao(req, res) {
  try {
    const selecoes = await prisma.selecao.findMany();
    if (selecoes.length < 2) {
      return res.status(500).json({ erro: 'É necessário pelo menos 2 seleções cadastradas.' });
    }

    const indiceComum = Math.floor(Math.random() * selecoes.length);
    let indiceImpostor;
    do {
      indiceImpostor = Math.floor(Math.random() * selecoes.length);
    } while (indiceImpostor === indiceComum);

    const comum = selecoes[indiceComum].nome;
    const impostor = selecoes[indiceImpostor].nome;

    let temas = [comum, impostor];
    if (Math.random() < 0.5) temas.reverse();

    res.json({ temas });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro interno ao sortear seleções.' });
  }
}

module.exports = { sortearSelecao };