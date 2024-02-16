-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 15, 2023 at 10:12 AM
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

--
-- Dumping data for table `Album`
--

INSERT INTO `Album` (`AlbumKey`, `AlbumTitle`, `AlbumDate`, `AlbumStudio`) VALUES
(1, 'Journey to the Stars', '2020-03-15', 'Galaxy Studios'),
(2, 'Heartbeats', '2018-06-05', 'Moonlight Productions'),
(3, 'Eclipses', '2021-10-10', 'Starlight Studios'),
(4, 'Serenades of the Night', '2019-01-20', 'Twilight Records'),
(5, 'Harmonies of the Sea', '2022-04-15', 'Ocean Wave Studios');

-- --------------------------------------------------------

--
-- Table structure for table `Artist`
--

CREATE TABLE `Artist` (
  `ArtistKey` int(11) NOT NULL,
  `ArtistName` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Artist`
--

INSERT INTO `Artist` (`ArtistKey`, `ArtistName`) VALUES
(1, 'Celestial Voices'),
(2, 'Moonwalkers'),
(3, 'Star Travellers'),
(4, 'Night Owls'),
(5, 'Oceania');

-- --------------------------------------------------------

--
-- Table structure for table `ArtistAlbum`
--

CREATE TABLE `ArtistAlbum` (
  `ArtistKey` int(11) NOT NULL,
  `AlbumKey` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `ArtistAlbum`
--

INSERT INTO `ArtistAlbum` (`ArtistKey`, `AlbumKey`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

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

--
-- Dumping data for table `Inventory`
--

INSERT INTO `Inventory` (`InventoryKey`, `InventoryPrice`, `Condition`, `AlbumKey`) VALUES
(1, 19.99, 'Mint', 1),
(2, 14.99, 'Good', 2),
(3, 21.50, 'Mint', 3),
(4, 18.50, 'Fair', 4),
(5, 20.00, 'Mint', 5);

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

--
-- Dumping data for table `Person`
--

INSERT INTO `Person` (`PersonKey`, `PersonLastName`, `PersonFirstName`, `PersonPhone`, `PersonEmail`) VALUES
(1, 'Smith', 'John', '+123456789', 'john.smith@email.com'),
(2, 'Doe', 'Jane', '+234567890', 'jane.doe@email.com'),
(3, 'Brown', 'Charlie', '+345678901', 'charlie.brown@email.com'),
(4, 'Adams', 'Amy', '+456789012', 'amy.adams@email.com'),
(5, 'White', 'William', '+567890123', 'william.white@email.com');

-- --------------------------------------------------------

--
-- Table structure for table `Purchase`
--

CREATE TABLE `Purchase` (
  `PurchaseKey` int(11) NOT NULL,
  `PurchaseDate` date DEFAULT NULL,
  `PersonKey` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Purchase`
--

INSERT INTO `Purchase` (`PurchaseKey`, `PurchaseDate`, `PersonKey`) VALUES
(1, '2023-09-30', 1),
(2, '2023-09-28', 2),
(3, '2023-09-27', 3),
(4, '2023-09-26', 4),
(5, '2023-09-25', 5);

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

--
-- Dumping data for table `PurchaseDetail`
--

INSERT INTO `PurchaseDetail` (`PurchaseDetailKey`, `PurchaseKey`, `PurchasePrice`, `InventoryKey`) VALUES
(1, 1, 19.99, 1),
(2, 2, 14.99, 2),
(3, 3, 21.50, 3),
(4, 4, 18.50, 4),
(5, 5, 20.00, 5);

-- --------------------------------------------------------

--
-- Table structure for table `Sale`
--

CREATE TABLE `Sale` (
  `SaleKey` int(11) NOT NULL,
  `SaleDate` date DEFAULT NULL,
  `PersonKey` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Sale`
--

INSERT INTO `Sale` (`SaleKey`, `SaleDate`, `PersonKey`) VALUES
(1, '2023-09-24', 1),
(2, '2023-09-23', 2),
(3, '2023-09-22', 3),
(4, '2023-09-21', 4),
(5, '2023-09-20', 5);

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
-- Dumping data for table `SaleDetail`
--

INSERT INTO `SaleDetail` (`SaleDetailKey`, `SaleDetailPrice`, `SaleKey`, `InventoryKey`) VALUES
(1, 19.50, 1, 1),
(2, 15.50, 2, 2),
(3, 22.00, 3, 3),
(4, 19.00, 4, 4),
(5, 20.50, 5, 5);

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
