-- CreateTable
CREATE TABLE "Referal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "referrer_first_name" TEXT NOT NULL,
    "referrer_last_name" TEXT NOT NULL,
    "referrer_email" TEXT NOT NULL,
    "referal_code" TEXT NOT NULL,
    "referee_first_name" TEXT NOT NULL,
    "referee_last_name" TEXT NOT NULL,
    "referee_email" TEXT NOT NULL,
    "referrer_source_of_information" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Referal_referal_code_key" ON "Referal"("referal_code");
