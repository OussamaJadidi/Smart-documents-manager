-- CreateTable
CREATE TABLE `users` (
    `Id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NOT NULL,
    `prenom` VARCHAR(50) NOT NULL,
    `ppr` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cnt` INTEGER NOT NULL,
    `cin` VARCHAR(50) NOT NULL,
    `grade` INTEGER NOT NULL,
    `echelle` INTEGER NOT NULL,
    `echelon` INTEGER NOT NULL,
    `service` VARCHAR(255) NOT NULL,
    `option` VARCHAR(255) NOT NULL,
    `adresse` VARCHAR(50) NOT NULL,
    `sexe` VARCHAR(50) NOT NULL,
    `image` BLOB NOT NULL,

    PRIMARY KEY (`Id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
