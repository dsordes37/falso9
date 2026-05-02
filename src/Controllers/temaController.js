const prisma = require('../models/prismaClient');

async function sortearTema(req, res) {
  try {
    const jogadores = await prisma.jogador.findMany();
    if (jogadores.length < 2) {
      return res.status(500).json({ erro: 'É necessário pelo menos 2 jogadores cadastrados.' });
    }

    const indiceComum = Math.floor(Math.random() * jogadores.length);
    let indiceImpostor;
    do {
      indiceImpostor = Math.floor(Math.random() * jogadores.length);
    } while (indiceImpostor === indiceComum);

    const comum = jogadores[indiceComum].nome;
    const impostor = jogadores[indiceImpostor].nome;

    let temas = [comum, impostor];
    if (Math.random() < 0.5) temas.reverse();

    res.json({ temas });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro interno ao sortear tema.' });
  }
}

module.exports = { sortearTema };