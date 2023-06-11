/*
  Warnings:

  - A unique constraint covering the columns `[nom,prenom]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` ENUM('Basic', 'Admin') NOT NULL DEFAULT 'Basic',
    MODIFY `email` VARCHAR(191) NULL,
    MODIFY `image` BLOB NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_nom_prenom_key` ON `users`(`nom`, `prenom`);
