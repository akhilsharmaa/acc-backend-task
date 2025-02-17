-- CreateTable
CREATE TABLE `Referal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referrer_first_name` VARCHAR(191) NOT NULL,
    `referrer_last_name` VARCHAR(191) NOT NULL,
    `referrer_email` VARCHAR(191) NOT NULL,
    `referal_code` VARCHAR(191) NOT NULL,
    `referee_first_name` VARCHAR(191) NOT NULL,
    `referee_last_name` VARCHAR(191) NOT NULL,
    `referee_email` VARCHAR(191) NOT NULL,
    `referrer_source_of_information` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Referal_referal_code_key`(`referal_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
