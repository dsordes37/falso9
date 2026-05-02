-- CreateTable
CREATE TABLE "selecao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "selecao_nome_key" ON "selecao"("nome");
