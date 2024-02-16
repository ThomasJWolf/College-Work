-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 01, 2023 at 10:08 PM
-- Server version: 5.7.23-23
-- PHP Version: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `twolf1_VincsVinylDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `Album`
--

CREATE TABLE `Album` (
  `AlbumKey` int(11) NOT NULL,
  `AlbumTitle` varchar(255) CHARACTER SET utf8 NOT NULL,
  `AlbumDate` date DEFAULT NULL,
  `AlbumStudio` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Artist`
--

CREATE TABLE `Artist` (
  `ArtistKey` int(11) NOT NULL,
  `ArtistName` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ArtistAlbum`
--

CREATE TABLE `ArtistAlbum` (
  `ArtistKey` int(11) NOT NULL,
  `AlbumKey` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Inventory`
--

CREATE TABLE `Inventory` (
  `InventoryKey` int(11) NOT NULL,
  `InventoryPrice` decimal(10,2) NOT NULL,
  `Condition` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `AlbumKey` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Person`
--

CREATE TABLE `Person` (
  `PersonKey` int(11) NOT NULL,
  `PersonLastName` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `PersonFirstName` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `PersonPhone` varchar(15) CHARACTER SET utf8 DEFAULT NULL,
  `PersonEmail` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Purchase`
--

CREATE TABLE `Purchase` (
  `PurchaseKey` int(11) NOT NULL,
  `PurchaseDate` date DEFAULT NULL,
  `PersonKey` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PurchaseDetail`
--

CREATE TABLE `PurchaseDetail` (
  `PurchaseDetailKey` int(11) NOT NULL,
  `PurchaseKey` int(11) DEFAULT NULL,
  `PurchasePrice` decimal(10,2) DEFAULT NULL,
  `InventoryKey` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Sale`
--

CREATE TABLE `Sale` (
  `SaleKey` int(11) NOT NULL,
  `SaleDate` date DEFAULT NULL,
  `PersonKey` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `SaleDetail`
--

CREATE TABLE `SaleDetail` (
  `SaleDetailKey` int(11) NOT NULL,
  `SaleDetailPrice` decimal(10,2) DEFAULT NULL,
  `SaleKey` int(11) DEFAULT NULL,
  `InventoryKey` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Album`
--
ALTER TABLE `Album`
  ADD PRIMARY KEY (`AlbumKey`);

--
-- Indexes for table `Artist`
--
ALTER TABLE `Artist`
  ADD PRIMARY KEY (`ArtistKey`);

--
-- Indexes for table `ArtistAlbum`
--
ALTER TABLE `ArtistAlbum`
  ADD PRIMARY KEY (`ArtistKey`,`AlbumKey`),
  ADD KEY `AlbumKey` (`AlbumKey`),
  ADD KEY `ArtistKey` (`ArtistKey`);

--
-- Indexes for table `Inventory`
--
ALTER TABLE `Inventory`
  ADD PRIMARY KEY (`InventoryKey`),
  ADD KEY `AlbumKey` (`AlbumKey`);

--
-- Indexes for table `Person`
--
ALTER TABLE `Person`
  ADD PRIMARY KEY (`PersonKey`);

--
-- Indexes for table `Purchase`
--
ALTER TABLE `Purchase`
  ADD PRIMARY KEY (`PurchaseKey`),
  ADD KEY `PersonKey` (`PersonKey`);

--
-- Indexes for table `PurchaseDetail`
--
ALTER TABLE `PurchaseDetail`
  ADD PRIMARY KEY (`PurchaseDetailKey`),
  ADD KEY `PurchaseKey` (`PurchaseKey`),
  ADD KEY `InventoryKey` (`InventoryKey`);

--
-- Indexes for table `Sale`
--
ALTER TABLE `Sale`
  ADD PRIMARY KEY (`SaleKey`),
  ADD KEY `PersonKey` (`PersonKey`);

--
-- Indexes for table `SaleDetail`
--
ALTER TABLE `SaleDetail`
  ADD PRIMARY KEY (`SaleDetailKey`),
  ADD KEY `SaleKey` (`SaleKey`),
  ADD KEY `InventoryKey` (`InventoryKey`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ArtistAlbum`
--
ALTER TABLE `ArtistAlbum`
  ADD CONSTRAINT `ArtistAlbum_ibfk_1` FOREIGN KEY (`ArtistKey`) REFERENCES `Artist` (`ArtistKey`) ON UPDATE CASCADE,
  ADD CONSTRAINT `ArtistAlbum_ibfk_2` FOREIGN KEY (`AlbumKey`) REFERENCES `Album` (`AlbumKey`) ON UPDATE CASCADE;

--
-- Constraints for table `Inventory`
--
ALTER TABLE `Inventory`
  ADD CONSTRAINT `Inventory_ibfk_1` FOREIGN KEY (`AlbumKey`) REFERENCES `Album` (`AlbumKey`) ON UPDATE CASCADE;

--
-- Constraints for table `Purchase`
--
ALTER TABLE `Purchase`
  ADD CONSTRAINT `Purchase_ibfk_1` FOREIGN KEY (`PersonKey`) REFERENCES `Person` (`PersonKey`) ON UPDATE CASCADE;

--
-- Constraints for table `PurchaseDetail`
--
ALTER TABLE `PurchaseDetail`
  ADD CONSTRAINT `PurchaseDetail_ibfk_1` FOREIGN KEY (`PurchaseKey`) REFERENCES `Purchase` (`PurchaseKey`) ON UPDATE CASCADE,
  ADD CONSTRAINT `PurchaseDetail_ibfk_2` FOREIGN KEY (`InventoryKey`) REFERENCES `Inventory` (`InventoryKey`) ON UPDATE CASCADE;

--
-- Constraints for table `Sale`
--
ALTER TABLE `Sale`
  ADD CONSTRAINT `Sale_ibfk_1` FOREIGN KEY (`PersonKey`) REFERENCES `Person` (`PersonKey`) ON UPDATE CASCADE;

--
-- Constraints for table `SaleDetail`
--
ALTER TABLE `SaleDetail`
  ADD CONSTRAINT `SaleDetail_ibfk_1` FOREIGN KEY (`SaleKey`) REFERENCES `Sale` (`SaleKey`) ON UPDATE CASCADE,
  ADD CONSTRAINT `SaleDetail_ibfk_2` FOREIGN KEY (`InventoryKey`) REFERENCES `Inventory` (`InventoryKey`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
