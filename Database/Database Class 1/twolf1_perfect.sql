-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 15, 2023 at 09:22 AM
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
-- Database: `twolf1_perfect`
--

-- --------------------------------------------------------

--
-- Table structure for table `Customer`
--

CREATE TABLE `Customer` (
  `CustomerPhoneKey` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `CustomerLastName` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `CustomerFirstName` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CustomerAddress1` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CustomerAddress2` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `CustomerCity` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CustomerState` char(2) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CustomerZip` char(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Customer`
--

INSERT INTO `Customer` (`CustomerPhoneKey`, `CustomerLastName`, `CustomerFirstName`, `CustomerAddress1`, `CustomerAddress2`, `CustomerCity`, `CustomerState`, `CustomerZip`) VALUES
('1234567890', 'Wolf', 'Thomas', '123 Funny Guy Ln.', '', 'Myrtle Beach', 'SC', '29575'),
('2065552123', 'Lamont', NULL, NULL, '161 South Western Ave', NULL, NULL, '98001'),
('2065552217', 'Wong', NULL, NULL, '2832 Washington Ave', 'Seattle', 'WA', '98002'),
('2065552963', 'Lewis', NULL, NULL, '520 East Lake Way', NULL, NULL, '98002'),
('2065553213', 'Anderson', NULL, 'Apt 10', '222 SouthernStreet', NULL, NULL, '98001'),
('2065553252', 'Johnston', NULL, 'Apt. 304', '1215 Terrace Avenue', 'Seattle', 'WA', '98001'),
('2065556623', 'Jimenez', NULL, 'Apt 13 B', '1200 Norton Way', NULL, NULL, '98003');

-- --------------------------------------------------------

--
-- Table structure for table `CustomerOrder`
--

CREATE TABLE `CustomerOrder` (
  `OrderKey` int(11) NOT NULL,
  `OrderDate` date NOT NULL,
  `OrderTime` time NOT NULL,
  `CustomerPhoneKey` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `EmployeeKey` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `CustomerOrder`
--

INSERT INTO `CustomerOrder` (`OrderKey`, `OrderDate`, `OrderTime`, `CustomerPhoneKey`, `EmployeeKey`) VALUES
(1000, '2014-10-08', '14:15:00', '2065552963', 'cmanning'),
(1001, '2014-10-08', '14:25:00', '2065556623', 'cmanning'),
(1002, '2014-10-08', '14:30:00', '2065552963', 'cmanning'),
(1003, '2014-10-08', '15:15:00', '2065552123', 'skristoph'),
(1004, '2014-10-10', '11:15:00', '2065552217', 'btaylor'),
(1005, '2014-10-10', '12:02:00', '2065556623', 'btaylor'),
(1234, '2023-10-02', '12:40:00', '1234567890', 'btaylor');

-- --------------------------------------------------------

--
-- Table structure for table `Employee`
--

CREATE TABLE `Employee` (
  `EmployeeKey` char(15) COLLATE utf8_unicode_ci NOT NULL,
  `EmployeeLastName` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `EmployeeFirstName` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `EmployeeHireDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Employee`
--

INSERT INTO `Employee` (`EmployeeKey`, `EmployeeLastName`, `EmployeeFirstName`, `EmployeeHireDate`) VALUES
('btaylor', 'Taylor', 'Bob', '2010-04-16'),
('cmanning', 'Manning', 'Carol', '2012-03-12'),
('skristoph', 'Kristopherson', 'Stephen', '2014-06-02');

-- --------------------------------------------------------

--
-- Table structure for table `OrderDetail`
--

CREATE TABLE `OrderDetail` (
  `OrderDetailKey` int(11) NOT NULL,
  `OrderKey` int(11) NOT NULL,
  `ProductKey` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `OrderDetailQuantity` int(11) NOT NULL,
  `OrderDetailPriceChanged` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `OrderDetail`
--

INSERT INTO `OrderDetail` (`OrderDetailKey`, `OrderKey`, `ProductKey`, `OrderDetailQuantity`, `OrderDetailPriceChanged`) VALUES
(1, 1000, 'soda', 2, 7.25),
(2, 1000, 'brdstks', 1, 2.50),
(3, 1000, 'specialM', 1, 7.35),
(4, 1001, 'specialL', 1, 15.00),
(5, 1002, 'soda', 2, 7.25),
(6, 1002, 'basicM', 3, 20.00),
(7, 1003, 'basicM', 1, 7.35),
(8, 1003, 'top', 4, 4.00),
(9, 1004, 'basicL', 1, 13.50),
(10, 1005, 'basicM', 2, 14.70),
(11, 1234, 'specialL', 4, 60.00),
(12, 1234, 'soda', 2, 7.50);

-- --------------------------------------------------------

--
-- Table structure for table `Product`
--

CREATE TABLE `Product` (
  `ProductKey` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `ProductName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `ProductUnitSize` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ProductUnitPrice` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Product`
--

INSERT INTO `Product` (`ProductKey`, `ProductName`, `ProductUnitSize`, `ProductUnitPrice`) VALUES
('basicL', 'Basic Pizza large', '18 inch', 13.50),
('basicM', 'Basic Pizza medium', '12 inch', 7.35),
('basicS', 'Basic Pizza small', '8 inch', 5.35),
('brdstks', 'Breadsticks', '8 per pack', 2.50),
('soda', 'Soda bottle', '2 Liter bottle', 3.75),
('specialL', 'Specialty large', '18 inch', 15.00),
('specialM', 'Specialty medium', '12 inch', 9.25),
('specialS', 'Specialty Small', '8 inch', 6.35),
('top', 'Additional toppings', 'I cup', 1.00);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_98002Zip`
-- (See below for the actual view)
--
CREATE TABLE `vw_98002Zip` (
`CustomerLastName` varchar(25)
,`CustomerPhoneKey` varchar(15)
,`CustomerZip` char(10)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_Between5&7`
-- (See below for the actual view)
--
CREATE TABLE `vw_Between5&7` (
`ProductKey` char(50)
,`ProductName` varchar(100)
,`ProductUnitSize` varchar(50)
,`ProductUnitPrice` decimal(10,2)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_CustNamePhoneZip`
-- (See below for the actual view)
--
CREATE TABLE `vw_CustNamePhoneZip` (
`CustomerLastName` varchar(25)
,`CustomerPhoneKey` varchar(15)
,`CustomerZip` char(10)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_LastNameL`
-- (See below for the actual view)
--
CREATE TABLE `vw_LastNameL` (
`CustomerPhoneKey` varchar(15)
,`CustomerLastName` varchar(25)
,`CustomerFirstName` varchar(20)
,`CustomerAddress1` varchar(50)
,`CustomerAddress2` varchar(50)
,`CustomerCity` varchar(50)
,`CustomerState` char(2)
,`CustomerZip` char(10)
);

-- --------------------------------------------------------

--
-- Structure for view `vw_98002Zip`
--
DROP TABLE IF EXISTS `vw_98002Zip`;

CREATE ALGORITHM=UNDEFINED DEFINER=`twolf1`@`localhost` SQL SECURITY DEFINER VIEW `vw_98002Zip`  AS SELECT `Customer`.`CustomerLastName` AS `CustomerLastName`, `Customer`.`CustomerPhoneKey` AS `CustomerPhoneKey`, `Customer`.`CustomerZip` AS `CustomerZip` FROM `Customer` WHERE (`Customer`.`CustomerZip` = '98002') ;

-- --------------------------------------------------------

--
-- Structure for view `vw_Between5&7`
--
DROP TABLE IF EXISTS `vw_Between5&7`;

CREATE ALGORITHM=UNDEFINED DEFINER=`twolf1`@`localhost` SQL SECURITY DEFINER VIEW `vw_Between5&7`  AS SELECT `Product`.`ProductKey` AS `ProductKey`, `Product`.`ProductName` AS `ProductName`, `Product`.`ProductUnitSize` AS `ProductUnitSize`, `Product`.`ProductUnitPrice` AS `ProductUnitPrice` FROM `Product` WHERE (`Product`.`ProductUnitPrice` between 5 and 7) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_CustNamePhoneZip`
--
DROP TABLE IF EXISTS `vw_CustNamePhoneZip`;

CREATE ALGORITHM=UNDEFINED DEFINER=`twolf1`@`localhost` SQL SECURITY DEFINER VIEW `vw_CustNamePhoneZip`  AS SELECT `Customer`.`CustomerLastName` AS `CustomerLastName`, `Customer`.`CustomerPhoneKey` AS `CustomerPhoneKey`, `Customer`.`CustomerZip` AS `CustomerZip` FROM `Customer` ;

-- --------------------------------------------------------

--
-- Structure for view `vw_LastNameL`
--
DROP TABLE IF EXISTS `vw_LastNameL`;

CREATE ALGORITHM=UNDEFINED DEFINER=`twolf1`@`localhost` SQL SECURITY DEFINER VIEW `vw_LastNameL`  AS SELECT `Customer`.`CustomerPhoneKey` AS `CustomerPhoneKey`, `Customer`.`CustomerLastName` AS `CustomerLastName`, `Customer`.`CustomerFirstName` AS `CustomerFirstName`, `Customer`.`CustomerAddress1` AS `CustomerAddress1`, `Customer`.`CustomerAddress2` AS `CustomerAddress2`, `Customer`.`CustomerCity` AS `CustomerCity`, `Customer`.`CustomerState` AS `CustomerState`, `Customer`.`CustomerZip` AS `CustomerZip` FROM `Customer` WHERE (`Customer`.`CustomerLastName` like 'L%') ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`CustomerPhoneKey`);

--
-- Indexes for table `CustomerOrder`
--
ALTER TABLE `CustomerOrder`
  ADD PRIMARY KEY (`OrderKey`),
  ADD KEY `CustomerPhoneKey` (`CustomerPhoneKey`),
  ADD KEY `EmployeeKey` (`EmployeeKey`);

--
-- Indexes for table `Employee`
--
ALTER TABLE `Employee`
  ADD PRIMARY KEY (`EmployeeKey`);

--
-- Indexes for table `OrderDetail`
--
ALTER TABLE `OrderDetail`
  ADD PRIMARY KEY (`OrderDetailKey`),
  ADD KEY `OrderKey` (`OrderKey`),
  ADD KEY `ProductKey` (`ProductKey`);

--
-- Indexes for table `Product`
--
ALTER TABLE `Product`
  ADD PRIMARY KEY (`ProductKey`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `CustomerOrder`
--
ALTER TABLE `CustomerOrder`
  ADD CONSTRAINT `CustomerOrder_ibfk_1` FOREIGN KEY (`CustomerPhoneKey`) REFERENCES `Customer` (`CustomerPhoneKey`) ON UPDATE CASCADE,
  ADD CONSTRAINT `CustomerOrder_ibfk_2` FOREIGN KEY (`EmployeeKey`) REFERENCES `Employee` (`EmployeeKey`) ON UPDATE CASCADE;

--
-- Constraints for table `OrderDetail`
--
ALTER TABLE `OrderDetail`
  ADD CONSTRAINT `OrderDetail_ibfk_1` FOREIGN KEY (`OrderKey`) REFERENCES `CustomerOrder` (`OrderKey`) ON UPDATE CASCADE,
  ADD CONSTRAINT `OrderDetail_ibfk_2` FOREIGN KEY (`ProductKey`) REFERENCES `Product` (`ProductKey`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
