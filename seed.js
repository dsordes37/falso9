const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const jogadores = [
  "Pelé",
  "Maradona",
  "Messi",
  "Cristiano Ronaldo",
  "Neymar",
  "Mbappé",
  "Dembelé",
  "Cafú",
  "Ronaldo Fenômeno",
  "Ronaldinho Gaúcho",
  "Kevin De Bruyne",
  "Virgil van Dijk",
  "Sergio Ramos", 
  "Luka Modrić",
  "Kylian Mbappé",
  "Mohamed Salah",
  "Sadio Mané",
  "raphinha",
  "casemiro",
  "ochoa",
  "ter stegen",
  "alisson",
  "vinicius junior",
  "endrick",
  "harry kane",
  "robert lewandowski",
  "erling haaland",
  "bruno fernandes"
];

async function main() {
  for (const nome of jogadores) {
    await prisma.jogador.upsert({
      where: { nome },
      update: {},
      create: { nome }
    });
  }
  console.log("Jogadores inseridos com sucesso");
}

main()
  .catch(e => console.error("Erro:", e))
  .finally(async () => await prisma.$disconnect());