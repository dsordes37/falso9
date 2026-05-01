-- CreateTable
CREATE TABLE "jogador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "jogador_nome_key" ON "jogador"("nome");
