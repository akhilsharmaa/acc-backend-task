-- MySQL dump 10.13  Distrib 8.0.41, for Linux (x86_64)
--
-- Host: localhost    Database: accredian
-- ------------------------------------------------------
-- Server version	8.0.41-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Referal`
--

DROP TABLE IF EXISTS `Referal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Referal` (
  `id` int NOT NULL AUTO_INCREMENT,
  `referrer_first_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `referrer_last_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `referrer_email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `referal_code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `referee_first_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `referee_last_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `referee_email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `referrer_source_of_information` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Referal_referal_code_key` (`referal_code`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Referal`
--

LOCK TABLES `Referal` WRITE;
/*!40000 ALTER TABLE `Referal` DISABLE KEYS */;
INSERT INTO `Referal` VALUES (1,'Akhilesh','Sharma','asdsdd@gmail.com','123123','Asdasd','123123','a@gmail.com','asdfasdfasdf','2025-02-17 08:50:28.302','2025-02-17 08:50:28.302'),(4,'Akhilesh','Sharma','asdsdd@gmail.com','12d3123','Asdasd','123123','ama@il.com','asdfasdfasdf','2025-02-17 08:59:49.232','2025-02-17 08:59:49.232'),(6,'Akhilesh','Sharma','asdsdd@gmail.com','12d3df123','Asdasd','123123','ama@il.com','asdfasdfasdf','2025-02-17 09:56:45.918','2025-02-17 09:56:45.918'),(8,'Akhilesh','Sharma','asdsdd@gmail.com','12d3dfsd123','Asdasd','123123','ama@il.com','asdfasdfasdf','2025-02-17 11:13:52.202','2025-02-17 11:13:52.202'),(10,'Akhilesh','Sharma','asdsdd@gmail.com','12d3dasfsd123','Asdasd','123123','ama@il.com','asdfasdfasdf','2025-02-17 11:16:10.225','2025-02-17 11:16:10.225'),(11,'Akhilesh','Sharma','asdsdd@gmail.com','12d3dasfsdsd123','Asdasd','123123','ama@il.com','asdfasdfasdf','2025-02-17 11:17:28.863','2025-02-17 11:17:28.863'),(13,'Akhilesh','Sharma','asdsdd@gmail.com','12d3dasfsddsd123','Asdasd','123123','ama@il.com','asdfasdfasdf','2025-02-17 11:18:01.626','2025-02-17 11:18:01.626'),(14,'Akhilesh','Sharma','asdsdd@gmail.com','12d3dasfsasdddsd123','Asdasd','123123','ama@il.com','asdfasdfasdf','2025-02-17 11:21:37.936','2025-02-17 11:21:37.936'),(17,'Akhilesh','Sharma','asdsdd@gmail.com','12d3dasfsdsasdddsd123','Asdsdasd','123123','ama@il.com','asdfasdfasdf','2025-02-17 14:04:10.682','2025-02-17 14:04:10.682'),(19,'Akhilesh','Sharma','asdsdd@gmail.com','12df3dasfsdsasdddsd123','Asdsdasd','123123','ama@il.com','asdfasdfasdf','2025-02-17 14:06:21.768','2025-02-17 14:06:21.768'),(21,'Akhilesh','Sharma','asdsdd@gmail.com','321123','Asdsdasd','123123','akhilesh.kumarsharma.csbs26@heritageit.edu.in','asdfasdfasdf','2025-02-17 14:16:28.705','2025-02-17 14:16:28.705'),(22,'Akhilesh','Sharma','asdsdd@gmail.com','321d3','Asdsdasd','123123','akhilesh.kumarsharma.csbs26@heritageit.edu.in','asdfasdfasdf','2025-02-17 14:20:06.585','2025-02-17 14:20:06.585'),(25,'Akhilesh','Sharma','asdsdd@gmail.com','32d3','Asdsdasd','123123','akhilesh.kumarsharma.csbs26@heritageit.edu.in','asdfasdfasdf','2025-02-17 14:22:13.400','2025-02-17 14:22:13.400'),(26,'Akhil','Sharma','akhilsharma3332@gmail.com','12323','Abhishek','Singh','akhilesh.kumarsharma.csbs26@heritageit.edu.in','Facebook','2025-02-17 15:02:11.396','2025-02-17 15:02:11.396'),(27,'Akhil','Sharma','akhilsharma3332@gmail.com','122323','Abhishek','Singh','akhilesh.kumarsharma.csbs26@heritageit.edu.in','Facebook','2025-02-17 15:05:12.774','2025-02-17 15:05:12.774');
/*!40000 ALTER TABLE `Referal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('023767a5-ee33-4387-8772-33ca49fa36e1','ff362e50616fdc62a7c01c10a1cc5ae6c269f77a3e30688c824b14b95a14d5cc','2025-02-17 07:49:46.762','20250217074946_initialize',NULL,NULL,'2025-02-17 07:49:46.747',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-17 21:47:40
