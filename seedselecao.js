const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const selecoes = [
  "Brasil",
  "Argentina",
  "França",
  "Alemanha",
  "Itália",
  "Inglaterra",
  "Espanha",
  "Países Baixos",
  "Portugal",
  "Uruguai",
  "Bélgica",
  "Croácia",
  "Colômbia",
  "México",
  "Suíça"
];

async function main() {
  for (const nome of selecoes) {
    await prisma.selecao.upsert({
      where: { nome },
      update: {},
      create: { nome }
    });
  }
  console.log("Seleções inseridas com sucesso");
}

main()
  .catch(e => console.error("Erro:", e))
  .finally(async () => await prisma.$disconnect());