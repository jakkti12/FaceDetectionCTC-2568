-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 18, 2025 at 06:40 AM
-- Server version: 8.0.31
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `facescansystem_2567`
--

-- --------------------------------------------------------

--
-- Table structure for table `advisors_groups`
--

DROP TABLE IF EXISTS `advisors_groups`;
CREATE TABLE IF NOT EXISTS `advisors_groups` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'รหัสอ้างอิง',
  `advisor_id` int NOT NULL COMMENT 'ครูที่ปรึกษา',
  `group_id` int NOT NULL COMMENT 'กลุ่มการเรียน',
  `advisor_type` varchar(10) NOT NULL COMMENT 'ประเภทที่ปรึกษา',
  `created_at` datetime NOT NULL COMMENT 'บันทึกข้อมูลเมื่อไหร่',
  `updated_at` datetime NOT NULL COMMENT 'แก้ไขข้อมูลล่าสุดเมื่อไหร่',
  `status` int NOT NULL DEFAULT '1' COMMENT 'สถานะ',
  PRIMARY KEY (`id`),
  KEY `advisor_id` (`advisor_id`,`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `attendant`
--

DROP TABLE IF EXISTS `attendant`;
CREATE TABLE IF NOT EXISTS `attendant` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `staff_id` int UNSIGNED NOT NULL DEFAULT '0',
  `ts` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `attendant`
--

INSERT INTO `attendant` (`id`, `staff_id`, `ts`) VALUES
(1, 0, '2024-05-15 16:30:36'),
(2, 32, '2024-05-16 08:53:14');

-- --------------------------------------------------------

--
-- Table structure for table `check_line`
--

DROP TABLE IF EXISTS `check_line`;
CREATE TABLE IF NOT EXISTS `check_line` (
  `id` int NOT NULL AUTO_INCREMENT,
  `week` int NOT NULL,
  `day_id` int NOT NULL,
  `teacher_id` int NOT NULL,
  `student_id` int NOT NULL,
  `room_id` int NOT NULL,
  `picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `time` datetime NOT NULL,
  `last_check_in` date NOT NULL,
  `student_status` int NOT NULL,
  `status` int NOT NULL,
  `checker` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ci_sessions`
--

DROP TABLE IF EXISTS `ci_sessions`;
CREATE TABLE IF NOT EXISTS `ci_sessions` (
  `id` varchar(40) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `timestamp` int UNSIGNED NOT NULL DEFAULT '0',
  `data` blob NOT NULL,
  KEY `ci_sessions_timestamp` (`timestamp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `college`
--

DROP TABLE IF EXISTS `college`;
CREATE TABLE IF NOT EXISTS `college` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `college`
--

INSERT INTO `college` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'วิทยาลัยเทคนิคชัยภูมิ', 1, '2015-05-19 02:45:30', '2015-05-28 08:27:57'),
(2, 'วิทยาลัยเทคนิคขอนแก่น', 1, '2015-05-19 02:45:30', '2015-05-23 18:38:09'),
(3, 'วิทยาลัยสารพัดช่าง', 1, '2015-05-19 02:45:51', '2015-05-23 18:37:33'),
(4, 'วิทยาลัยเกษตร', -1, '2015-05-23 18:40:31', '2015-05-23 18:40:31'),
(5, 'วิทยาลัยแก้งคร้อ', -1, '2015-05-23 18:40:41', '2015-05-23 18:40:41'),
(6, 'วิทยาลัยเชตุพน', -1, '2015-05-23 18:40:56', '2015-05-23 18:41:34'),
(7, 'วิทยาลัยเทคนิคชลบุรี', -1, '2015-05-19 02:45:30', '2015-05-19 02:45:30'),
(8, 'วิทยาลัยเทคโนโลยีกรุงเทพ', 1, '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
(9, 'วิทยาลัยเทคโนโลยีเชียงใหม่', 1, '2025-01-01 00:00:00', '2025-01-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
CREATE TABLE IF NOT EXISTS `groups` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'รหัสอ้างอิง',
  `group_code` int NOT NULL COMMENT 'รหัสกลุ่ม',
  `group_name` varchar(100) NOT NULL,
  `room_id` int NOT NULL,
  `college_id` int NOT NULL COMMENT 'รหัสสถานศึกษา',
  `major_id` int NOT NULL COMMENT 'สาขาวิชา',
  `minor_id` int NOT NULL COMMENT 'สาขางาน',
  `created_at` datetime NOT NULL COMMENT 'บันทึกข้อมูลเมื่อไหร่',
  `updated_at` datetime NOT NULL COMMENT 'แก้ไขข้อมูลล่าสุดเมื่อไหร่',
  `status` int NOT NULL DEFAULT '1' COMMENT 'สถานะ',
  PRIMARY KEY (`id`),
  KEY `college_id` (`college_id`,`major_id`,`minor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `group_code`, `group_name`, `room_id`, `college_id`, `major_id`, `minor_id`, `created_at`, `updated_at`, `status`) VALUES
(1, 101, 'E1', 1, 1, 1, 3, '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1),
(2, 102, 'E2', 2, 1, 1, 3, '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1),
(3, 103, 'E3', 3, 1, 1, 3, '2021-05-27 14:21:04', '2021-05-27 14:21:04', 1),
(4, 104, 'E4', 4, 1, 1, 3, '2021-05-27 14:19:39', '2021-05-27 14:19:39', 1);

-- --------------------------------------------------------

--
-- Table structure for table `group_days`
--

DROP TABLE IF EXISTS `group_days`;
CREATE TABLE IF NOT EXISTS `group_days` (
  `id` int NOT NULL AUTO_INCREMENT,
  `week_id` int NOT NULL,
  `day` varchar(25) NOT NULL,
  `join_start` datetime NOT NULL,
  `join_end` datetime NOT NULL,
  `cover_img` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `status` int NOT NULL DEFAULT '1',
  `created_by_user_id` int NOT NULL,
  `is_lock` int NOT NULL DEFAULT '0',
  `remark` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `group_days`
--

INSERT INTO `group_days` (`id`, `week_id`, `day`, `join_start`, `join_end`, `cover_img`, `created_at`, `updated_at`, `status`, `created_by_user_id`, `is_lock`, `remark`) VALUES
(1, 1, 'จันทร์', '2025-01-08 08:00:00', '2025-01-08 16:00:00', 'day1.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 1'),
(2, 1, 'อังคาร', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 2'),
(3, 1, 'พุธ', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 3'),
(4, 1, 'พฤหัส', '2021-05-28 00:00:00', '2021-05-29 00:00:00', 'homeroom/2021/id-2.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 4'),
(5, 1, 'ศุกร์', '2021-05-27 00:00:00', '2021-05-31 00:00:00', 'homeroom/2021/id-1.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 5'),
(6, 1, 'เสาร์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 0, 0, 0, 'Day 6'),
(7, 1, 'อาทิตย์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 0, 0, 0, 'Day 7'),
(8, 2, 'จันทร์', '2025-01-08 08:00:00', '2025-01-08 16:00:00', 'day1.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 1'),
(9, 2, 'อังคาร', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 2'),
(10, 2, 'พุธ', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 3'),
(11, 2, 'พฤหัส', '2021-05-28 00:00:00', '2021-05-29 00:00:00', 'homeroom/2021/id-2.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 4'),
(12, 2, 'ศุกร์', '2021-05-27 00:00:00', '2021-05-31 00:00:00', 'homeroom/2021/id-1.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 5'),
(13, 2, 'เสาร์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 6'),
(14, 2, 'อาทิตย์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 7'),
(15, 3, 'จันทร์', '2025-01-08 08:00:00', '2025-01-08 16:00:00', 'day1.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 1'),
(16, 3, 'อังคาร', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 2'),
(17, 3, 'พุธ', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 3'),
(18, 3, 'พฤหัส', '2021-05-28 00:00:00', '2021-05-29 00:00:00', 'homeroom/2021/id-2.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 4'),
(19, 3, 'ศุกร์', '2021-05-27 00:00:00', '2021-05-31 00:00:00', 'homeroom/2021/id-1.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 5'),
(20, 3, 'เสาร์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 6'),
(21, 3, 'อาทิตย์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 7'),
(22, 4, 'จันทร์', '2025-01-08 08:00:00', '2025-01-08 16:00:00', 'day1.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 1'),
(23, 4, 'อังคาร', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 2'),
(24, 4, 'พุธ', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 3'),
(25, 4, 'พฤหัส', '2021-05-28 00:00:00', '2021-05-29 00:00:00', 'homeroom/2021/id-2.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 4'),
(26, 4, 'ศุกร์', '2021-05-27 00:00:00', '2021-05-31 00:00:00', 'homeroom/2021/id-1.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 5'),
(27, 4, 'เสาร์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 6'),
(28, 4, 'อาทิตย์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 7'),
(29, 5, 'จันทร์', '2025-01-08 08:00:00', '2025-01-08 16:00:00', 'day1.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 1'),
(30, 5, 'อังคาร', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 2'),
(31, 5, 'พุธ', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 3'),
(32, 5, 'พฤหัส', '2021-05-28 00:00:00', '2021-05-29 00:00:00', 'homeroom/2021/id-2.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 4'),
(33, 5, 'ศุกร์', '2021-05-27 00:00:00', '2021-05-31 00:00:00', 'homeroom/2021/id-1.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 5'),
(34, 5, 'เสาร์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 6'),
(35, 5, 'อาทิตย์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 7'),
(36, 6, 'จันทร์', '2025-01-08 08:00:00', '2025-01-08 16:00:00', 'day1.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 1'),
(37, 6, 'อังคาร', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 2'),
(38, 6, 'พุธ', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 3'),
(39, 6, 'พฤหัส', '2021-05-28 00:00:00', '2021-05-29 00:00:00', 'homeroom/2021/id-2.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 4'),
(40, 6, 'ศุกร์', '2021-05-27 00:00:00', '2021-05-31 00:00:00', 'homeroom/2021/id-1.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 5'),
(41, 6, 'เสาร์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 6'),
(42, 6, 'อาทิตย์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 7'),
(43, 7, 'จันทร์', '2025-01-08 08:00:00', '2025-01-08 16:00:00', 'day1.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 1'),
(44, 7, 'อังคาร', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 2'),
(45, 7, 'พุธ', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 3'),
(46, 7, 'พฤหัส', '2021-05-28 00:00:00', '2021-05-29 00:00:00', 'homeroom/2021/id-2.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 4'),
(47, 7, 'ศุกร์', '2021-05-27 00:00:00', '2021-05-31 00:00:00', 'homeroom/2021/id-1.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 5'),
(48, 7, 'เสาร์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 6'),
(49, 7, 'อาทิตย์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 7'),
(50, 8, 'จันทร์', '2025-01-08 08:00:00', '2025-01-08 16:00:00', 'day1.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 1'),
(51, 8, 'อังคาร', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 2'),
(52, 8, 'พุธ', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 3'),
(53, 8, 'พฤหัส', '2021-05-28 00:00:00', '2021-05-29 00:00:00', 'homeroom/2021/id-2.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 4'),
(54, 8, 'ศุกร์', '2021-05-27 00:00:00', '2021-05-31 00:00:00', 'homeroom/2021/id-1.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 5'),
(55, 8, 'เสาร์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 6'),
(56, 8, 'อาทิตย์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 7'),
(57, 9, 'จันทร์', '2025-01-08 08:00:00', '2025-01-08 16:00:00', 'day1.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 1'),
(58, 9, 'อังคาร', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 2'),
(59, 9, 'พุธ', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 3'),
(60, 9, 'พฤหัส', '2021-05-28 00:00:00', '2021-05-29 00:00:00', 'homeroom/2021/id-2.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 4'),
(61, 9, 'ศุกร์', '2021-05-27 00:00:00', '2021-05-31 00:00:00', 'homeroom/2021/id-1.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 5'),
(62, 9, 'เสาร์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 6'),
(63, 9, 'อาทิตย์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 7'),
(64, 10, 'จันทร์', '2025-01-08 08:00:00', '2025-01-08 16:00:00', 'day1.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 1'),
(65, 10, 'อังคาร', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 2'),
(66, 10, 'พุธ', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 3'),
(67, 10, 'พฤหัส', '2021-05-28 00:00:00', '2021-05-29 00:00:00', 'homeroom/2021/id-2.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 4'),
(68, 10, 'ศุกร์', '2021-05-27 00:00:00', '2021-05-31 00:00:00', 'homeroom/2021/id-1.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 5'),
(69, 10, 'เสาร์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 6'),
(70, 10, 'อาทิตย์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 7'),
(71, 11, 'จันทร์', '2025-01-08 08:00:00', '2025-01-08 16:00:00', 'day1.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 1'),
(72, 11, 'อังคาร', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 2'),
(73, 11, 'พุธ', '2025-01-09 08:00:00', '2025-01-09 16:00:00', 'day2.png', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 1, 0, 'Day 3'),
(74, 11, 'พฤหัส', '2021-05-28 00:00:00', '2021-05-29 00:00:00', 'homeroom/2021/id-2.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 4'),
(75, 11, 'ศุกร์', '2021-05-27 00:00:00', '2021-05-31 00:00:00', 'homeroom/2021/id-1.jpg', '2021-05-27 15:15:03', '2021-05-27 15:15:03', 1, 1, 0, 'Day 5'),
(76, 11, 'เสาร์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 6'),
(77, 11, 'อาทิตย์', '2025-02-01 13:50:49', '2025-02-01 13:50:49', '', '2025-02-01 13:50:49', '2025-02-01 13:50:49', 1, 0, 0, 'Day 7');

-- --------------------------------------------------------

--
-- Table structure for table `group_weeks`
--

DROP TABLE IF EXISTS `group_weeks`;
CREATE TABLE IF NOT EXISTS `group_weeks` (
  `id` int NOT NULL,
  `week_id` int NOT NULL,
  `semester_id` int NOT NULL,
  `week` int NOT NULL,
  `join_start` datetime NOT NULL,
  `join_end` datetime NOT NULL,
  `cover_img` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `status` int NOT NULL DEFAULT '1',
  `created_by_user_id` int NOT NULL,
  `is_lock` int NOT NULL DEFAULT '0',
  `remark` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `group_weeks`
--

INSERT INTO `group_weeks` (`id`, `week_id`, `semester_id`, `week`, `join_start`, `join_end`, `cover_img`, `created_at`, `updated_at`, `status`, `created_by_user_id`, `is_lock`, `remark`) VALUES
(1, 1, 1, 1, '2025-01-01 00:00:00', '2025-01-05 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 101, 0, 'Remark 1'),
(2, 1, 1, 2, '2025-01-06 08:00:00', '2025-01-12 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 101, 0, 'Remark 1'),
(3, 1, 1, 3, '2025-01-06 08:00:00', '2025-01-12 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 101, 0, 'Remark 1'),
(4, 1, 1, 4, '2025-01-06 08:00:00', '2025-01-12 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 101, 0, 'Remark 1'),
(5, 1, 1, 5, '2025-01-06 08:00:00', '2025-01-12 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 101, 0, 'Remark 1'),
(6, 1, 1, 6, '2025-01-06 08:00:00', '2025-01-12 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 101, 0, 'Remark 1'),
(7, 1, 1, 7, '2025-01-06 08:00:00', '2025-01-12 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 101, 0, 'Remark 1'),
(8, 1, 1, 8, '2025-01-06 08:00:00', '2025-01-12 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1, 101, 0, 'Remark 1'),
(9, 1, 1, 9, '2025-01-06 08:00:00', '2025-01-12 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 0, 101, 0, 'Remark 1'),
(10, 1, 1, 10, '2025-01-06 08:00:00', '2025-01-12 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 0, 101, 0, 'Remark 1'),
(11, 1, 1, 11, '2025-01-06 08:00:00', '2025-01-12 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 0, 101, 0, 'Remark 1'),
(12, 1, 1, 12, '2025-01-06 08:00:00', '2025-01-12 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 0, 101, 0, 'Remark 1'),
(13, 1, 1, 13, '2025-01-06 08:00:00', '2025-01-12 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 0, 101, 0, 'Remark 1'),
(14, 1, 1, 14, '2025-01-06 08:00:00', '2025-01-12 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 0, 101, 0, 'Remark 1'),
(15, 1, 1, 15, '2025-01-06 08:00:00', '2025-01-12 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 0, 101, 0, 'Remark 1'),
(16, 1, 1, 16, '2025-01-06 08:00:00', '2025-01-12 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 0, 101, 0, 'Remark 1'),
(17, 1, 1, 17, '2025-01-06 08:00:00', '2025-01-12 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 0, 101, 0, 'Remark 1'),
(18, 1, 1, 18, '2025-01-06 08:00:00', '2025-01-12 17:00:00', 'cover1.jpg', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 0, 101, 0, 'Remark 1');

-- --------------------------------------------------------

--
-- Table structure for table `majors`
--

DROP TABLE IF EXISTS `majors`;
CREATE TABLE IF NOT EXISTS `majors` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'รหัสอ้างอิง',
  `college_id` int NOT NULL COMMENT 'รหัสสถานศึกษา',
  `major_code` varchar(10) NOT NULL COMMENT 'รหัสสาขาวิชา',
  `major_name` varchar(100) NOT NULL COMMENT 'ชื่อสาขาวิชา',
  `major_eng` varchar(100) NOT NULL COMMENT 'ชื่อสาขาวิชาภาษาอังกฤษ',
  `created_at` datetime NOT NULL COMMENT 'บันทึกข้อมูลเมื่อไหร่',
  `updated_at` datetime NOT NULL COMMENT 'แก้ไขข้อมูลล่าสุดเมื่อไหร่',
  `status` int NOT NULL DEFAULT '1' COMMENT 'สถานะ',
  PRIMARY KEY (`id`),
  KEY `college_id` (`college_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `majors`
--

INSERT INTO `majors` (`id`, `college_id`, `major_code`, `major_name`, `major_eng`, `created_at`, `updated_at`, `status`) VALUES
(1, 1, 'MT001', 'เทคโนโลยีสารสนเทศ', 'Information Technology', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1),
(2, 2, 'MT002', 'วิศวกรรมไฟฟ้า', 'Electrical Engineering', '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1),
(3, 0, '2102', 'ช่างกลโรงงาน', 'Factory mechanic', '2021-05-27 14:26:09', '2021-05-27 14:26:09', -1),
(4, 0, '2101', 'ช่างยนต์', 'Mechanic', '2021-05-27 14:26:09', '2021-05-27 14:26:09', 1);

-- --------------------------------------------------------

--
-- Table structure for table `minors`
--

DROP TABLE IF EXISTS `minors`;
CREATE TABLE IF NOT EXISTS `minors` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'รหัสอ้างอิง',
  `room_id` int NOT NULL,
  `minor_code` varchar(10) NOT NULL COMMENT 'รหัสสาขางาน',
  `minor_name` varchar(100) NOT NULL COMMENT 'ชื่อสาขางาน',
  `minor_eng` varchar(100) NOT NULL COMMENT 'ชื่อสาขางานภาษาอังกฤษ',
  `college_id` int NOT NULL COMMENT 'รหัสสถานศึกษา',
  `major_id` int NOT NULL COMMENT 'รหัสสาขาวิชา',
  `created_at` datetime NOT NULL COMMENT 'บันทึกข้อมูลเมื่อไหร่',
  `updated_at` datetime NOT NULL COMMENT 'แก้ไขข้อมูลล่าสุดเมื่อไหร่',
  `status` int NOT NULL DEFAULT '1' COMMENT 'สถานะ',
  PRIMARY KEY (`id`),
  KEY `college_id` (`college_id`,`major_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `minors`
--

INSERT INTO `minors` (`id`, `room_id`, `minor_code`, `minor_name`, `minor_eng`, `college_id`, `major_id`, `created_at`, `updated_at`, `status`) VALUES
(1, 0, '', 'แอนนิเมชั่น', 'Animation', 1, 4, '2021-05-28 00:00:00', '2021-05-28 00:00:00', 1),
(2, 0, '', 'รถยนต์ไฟฟ้า', 'EV', 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(3, 1, '', 'การพัฒนาเว็บไซต์', 'WD', 3, 4, '2025-01-27 03:23:27', '2025-01-27 03:23:27', 1),
(4, 1, 'MN001', 'พัฒนาโปรแกรม', 'Software Development', 1, 1, '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1),
(5, 2, 'MN002', 'พัฒนาระบบเครือข่าย', 'Network Administration', 2, 2, '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
CREATE TABLE IF NOT EXISTS `rooms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room` varchar(2) NOT NULL,
  `week_id` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `room`, `week_id`, `created_at`, `updated_at`, `status`) VALUES
(1, 'E1', 1, '2025-01-27 03:24:51', '2025-01-27 03:24:51', 1),
(2, 'A1', 1, '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1),
(3, 'B1', 1, '2025-01-01 00:00:00', '2025-01-01 00:00:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `semester`
--

DROP TABLE IF EXISTS `semester`;
CREATE TABLE IF NOT EXISTS `semester` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `semester`
--

INSERT INTO `semester` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(3, 'ภาคเรียนที่ 1/2564', 1, '2015-05-24 16:27:34', '2015-05-24 18:16:18');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `firstname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `lastname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'student',
  `organization_id` int NOT NULL DEFAULT '0',
  `profile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '/profile1.png',
  `face_data` blob,
  `activated` tinyint(1) NOT NULL DEFAULT '1',
  `banned` tinyint(1) NOT NULL DEFAULT '0',
  `ban_reason` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `new_password_key` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `new_password_requested` datetime DEFAULT NULL,
  `new_email` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `new_email_key` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `last_ip` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `last_login` datetime NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `major_id` int NOT NULL,
  `minor_id` int NOT NULL,
  `group_id` int NOT NULL,
  `staff_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `faceData` (`id`),
  KEY `major_id` (`major_id`),
  KEY `group_id` (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `firstname`, `lastname`, `user_type`, `organization_id`, `profile`, `face_data`, `activated`, `banned`, `ban_reason`, `new_password_key`, `new_password_requested`, `new_email`, `new_email_key`, `last_ip`, `last_login`, `created`, `modified`, `major_id`, `minor_id`, `group_id`, `staff_id`) VALUES
(1, 'admin', '57a7ea46a6c58f62f02a782bd0fb6ee8', 'admin@demo.com', 'admin', 'admin', 'admin', 0, '1739860686007-.jpg', 0x000000a0389dbcbf000000400891a63f000000006a93893f000000202b8abcbf000000601924a9bf0000006048bcb4bf000000c0a7c3a7bf00000080f33dbfbf000000403325c33f000000a0fc65b7bf000000e0fcf0c73f00000000c6dfa5bf00000000dc14cabf0000002081b8c2bf00000060e096b0bf000000a0f68cc13f00000060e69cc0bf000000c076cfc5bf000000c0006bb0bf000000e0af82babf000000e0a034b23f000000a0c8f7adbf000000e01631953f00000060612faa3f00000080c15ac1bf00000000c2f3d2bf000000a0b80dbcbf000000c0e8bebbbf00000020202399bf000000c0a4c6abbf000000e0940090bf0000002056099f3f000000a06e8ccabf00000040e17dbcbf000000e024cc803f000000202049b83f00000000d08998bf00000040d70da7bf0000000093a7c73f000000c014f1a9bf00000020086ac8bf000000e0c516a23f00000040d32bb13f000000e02fd0ce3f000000a091c1cc3f00000080a37fae3f000000402015903f00000020f6b0b8bf00000020f54dbf3f000000008801cbbf000000206289b83f00000060a6e4c13f000000800d4da13f000000e08543a23f000000c0a7c8b13f000000001287b3bf000000a0113e973f000000a04af5c13f000000809d72c4bf00000020207361bf000000404289ac3f000000e03f79acbf000000806353a7bf0000008084a8b4bf000000a09c69c93f0000002061ebc13f000000c01ff6b7bf000000207428c3bf000000a033ccc73f000000404e84c6bf000000c03b5ab5bf0000006067169d3f000000402b7ec0bf00000080b19fc3bf000000603528d4bf000000a022f3b13f00000000b353dc3f000000203b54c63f000000a05fcec0bf000000809c61b63f000000609337afbf00000000a967593f000000c0a6bac03f00000060e8cba13f000000408555b6bf00000040d4c7ab3f00000080cc00b2bf000000c019539c3f00000000b7a3cb3f000000c0ae2d7a3f000000406fdeb7bf000000600626c43f000000409b7882bf000000401ecfaf3f000000406b34b63f00000000c340943f00000060a999b0bf000000607383943f00000040b636cbbf00000020d46d89bf000000207d24b43f00000080d1a39ebf00000000318d993f000000c014d9bc3f00000040159cbabf0000000053ceb63f00000020da4d7cbf000000a0d89579bf000000e07909b0bf00000000d52aaa3f00000060dbb8bebf00000000ba4ca7bf000000c08b4fbc3f000000e074f6c6bf000000004351ca3f000000402401c43f0000000013a9b43f000000c0a2d0bc3f000000201095c53f000000c049aca13f0000000009fa923f0000002055cd9dbf00000080158ec4bf00000040d951abbf000000809aa5bc3f000000603e92a43f000000c0e38cc73f000000c0807faa3f, 1, 0, NULL, NULL, NULL, NULL, NULL, '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2024-11-14 08:31:30', 1, 1, 2, 32),
(2, 'teacher1', '57a7ea46a6c58f62f02a782bd0fb6ee8', 'teacher1@gmail.com', 'teacher', 'teacher', 'teacher', 0, '1739854798264-.jpg', 0x000000402555c0bf000000c06407c03f000000a0ddb79c3f000000c041199bbf00000020ba90bbbf000000005be4b0bf00000000afdda3bf000000a017dfbdbf000000c03930c13f000000601418a4bf000000602474cf3f000000207c37bcbf000000c038f4cabf000000c093bbc0bf000000402e73873f000000a04f04c73f00000040482ac6bf000000a09c9cbcbf000000807a5cb2bf00000000972a65bf000000e0171daa3f0000006046139bbf00000080fd64ad3f000000800e94ad3f000000205ca8aabf000000004eb6d9bf00000080589eb9bf000000e054e5b7bf000000c095d8b93f0000004081d5acbf0000004068a5b9bf000000c040d9973f000000408efaccbf000000c0f488c0bf00000020a14e933f000000c0000ea53f000000801abd96bf000000a0055daebf000000603806cb3f00000020829ba1bf0000004033d1ccbf0000000070c887bf000000401c50903f00000040abdfcc3f000000a07d06c53f000000e0b33bb43f00000080f960a13f000000801aefbdbf0000000041acba3f000000609245c3bf00000060a6a5943f000000802464c63f00000060992cb93f000000c07f60a03f00000040eb8ca4bf000000200ff0c4bf0000002043e2843f000000605144bd3f00000040a300c4bf000000c0889d9abf000000c06532b03f000000e06465b0bf00000080cad79bbf000000a03743b2bf000000a0bc77d43f000000a02755b03f000000c05920bebf000000402c19c0bf000000c0fb6cc03f000000a013e0b6bf0000002052daa23f000000e091abaa3f00000020e038c6bf00000080a269c8bf00000000d4c5d2bf000000c073cdad3f0000006073bfd73f00000080bf70ac3f000000609558ccbf000000a03436923f00000000ae50c0bf000000408c97913f000000a0a7d1bd3f000000a0094ac43f000000806694a1bf000000c003709e3f000000e0a38abcbf000000807fd690bf00000020bb39c73f000000c02aa5c0bf000000e0d35d903f000000c00e89cc3f000000c00f039a3f000000003e6abd3f00000080885f6d3f00000000a5547b3f00000020b90eb3bf000000c07d37603f000000804c1cb9bf000000807a2a983f00000020b097a83f00000080e3c971bf000000c0e35282bf000000007538bc3f00000020fe25c1bf000000c05f5db03f0000004066d3a33f0000004099f89a3f0000008061c5513f000000a028fea9bf000000608a1b9fbf00000080a4c1c6bf00000060e53eb83f000000c0fb89ccbf000000c09acfc83f000000c0a516c93f000000406afd713f000000e058eec33f000000e0771eb43f000000408ce7ba3f00000000c2dd71bf00000000281d523f000000602ef8c4bf00000000045c9f3f000000c0fd53c43f000000c0100396bf00000040a1229c3f00000060207692bf, 1, 0, NULL, NULL, NULL, NULL, NULL, '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2024-11-14 08:31:31', 1, 1, 1, 32),
(3, 'teacher2', '57a7ea46a6c58f62f02a782bd0fb6ee8', 'teacher2@gmail.com', 'teacher', 'teacher', 'teacher', 0, '1738812529941-.jpg', 0x00000000c232abbf00000040fdf9bc3f000000e06e0ab13f000000c0a8bbb3bf000000a0dce4b0bf000000a067cfb3bf000000805d6c71bf000000202ee8c2bf000000c0c327ca3f00000000d030b7bf000000e053c9d53f000000c0803daabf000000801fd2c2bf00000040e55bc0bf000000604739a0bf000000c0681dc93f000000c0dd7fcdbf00000000e00ec1bf00000080e4bda43f00000060a4f67fbf000000c07011a33f000000a002daa3bf000000e0e140a63f000000403ca2bc3f000000200017afbf000000c0526bd7bf000000e0c3a0bebf000000e0e56dbebf00000020f61db73f0000004006a68fbf000000c01135943f000000e05b64b03f000000c0af65cabf00000000833ba5bf00000000c7a578bf00000000b02b7ebf0000008039a86f3f000000404617a9bf000000606d57cf3f000000c0d86c8ebf000000a0d48acfbf00000000dd54a1bf00000040b98fa43f000000603038d03f0000006011d3c33f00000040f972903f000000e01112a43f000000604225b0bf000000e09a83b33f00000020ce9cb9bf000000c0de37b33f000000c05278bb3f0000008026e0c13f000000e096dd703f00000040f2ab92bf0000006079c1c0bf00000060ea8aa2bf00000080dbfcb63f000000803bf0c4bf000000c034a677bf00000040eb2eb63f00000080661ab5bf000000003241693f000000206843b7bf000000605821d23f000000a01e23b23f00000020f70cbcbf000000c0cfcfc2bf00000080e5c0c63f000000a0386ac1bf000000a055c1afbf000000c0aac4a93f00000080a54dc2bf000000000cdabcbf000000606956d4bf000000009eda953f00000080ef5ed83f000000e06410ac3f000000c0ac27c3bf000000002702a73f000000a06ccdb7bf00000000f9549bbf000000801cc6a53f00000060d423c23f000000a0199ca0bf000000c014a7a23f000000c006bdb3bf000000a0a341a7bf00000080fc13c73f00000080c3b0a8bf000000e03b2a9abf000000e09bd1cb3f00000000d0ecb3bf000000c062c3a63f0000000006588cbf000000c0caf996bf00000000d08ba1bf00000040b311b23f0000006045d6b5bf000000a0ae09a03f000000a056c5aabf00000040b4f1a0bf000000c071487fbf0000008068f1b93f00000080a6f3cebf000000c02845b63f000000a0dcc59e3f000000a0c627943f00000040bafd973f00000080c5abb83f00000060765db9bf000000c0b869c1bf000000406de4c03f000000000263cfbf0000004062f3ca3f00000080de8ec13f000000802a75b43f0000006055abc23f00000040a629b23f000000e0ad39bc3f00000080e0d59bbf000000205cedb2bf000000005755c5bf000000402be93cbf0000008048ccb93f000000c09361b5bf000000a034c1bb3f000000200dc6a63f, 1, 0, NULL, NULL, NULL, NULL, NULL, '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2024-11-14 08:31:33', 1, 1, 2, 32),
(4, 'studen1', '57a7ea46a6c58f62f02a782bd0fb6ee8', 'student1@gmail.com', 'student', 'student', 'student', 0, '1738818176943-.jpg', 0x000000a0389dbcbf000000400891a63f000000006a93893f000000202b8abcbf000000601924a9bf0000006048bcb4bf000000c0a7c3a7bf00000080f33dbfbf000000403325c33f000000a0fc65b7bf000000e0fcf0c73f00000000c6dfa5bf00000000dc14cabf0000002081b8c2bf00000060e096b0bf000000a0f68cc13f00000060e69cc0bf000000c076cfc5bf000000c0006bb0bf000000e0af82babf000000e0a034b23f000000a0c8f7adbf000000e01631953f00000060612faa3f00000080c15ac1bf00000000c2f3d2bf000000a0b80dbcbf000000c0e8bebbbf00000020202399bf000000c0a4c6abbf000000e0940090bf0000002056099f3f000000a06e8ccabf00000040e17dbcbf000000e024cc803f000000202049b83f00000000d08998bf00000040d70da7bf0000000093a7c73f000000c014f1a9bf00000020086ac8bf000000e0c516a23f00000040d32bb13f000000e02fd0ce3f000000a091c1cc3f00000080a37fae3f000000402015903f00000020f6b0b8bf00000020f54dbf3f000000008801cbbf000000206289b83f00000060a6e4c13f000000800d4da13f000000e08543a23f000000c0a7c8b13f000000001287b3bf000000a0113e973f000000a04af5c13f000000809d72c4bf00000020207361bf000000404289ac3f000000e03f79acbf000000806353a7bf0000008084a8b4bf000000a09c69c93f0000002061ebc13f000000c01ff6b7bf000000207428c3bf000000a033ccc73f000000404e84c6bf000000c03b5ab5bf0000006067169d3f000000402b7ec0bf00000080b19fc3bf000000603528d4bf000000a022f3b13f00000000b353dc3f000000203b54c63f000000a05fcec0bf000000809c61b63f000000609337afbf00000000a967593f000000c0a6bac03f00000060e8cba13f000000408555b6bf00000040d4c7ab3f00000080cc00b2bf000000c019539c3f00000000b7a3cb3f000000c0ae2d7a3f000000406fdeb7bf000000600626c43f000000409b7882bf000000401ecfaf3f000000406b34b63f00000000c340943f00000060a999b0bf000000607383943f00000040b636cbbf00000020d46d89bf000000207d24b43f00000080d1a39ebf00000000318d993f000000c014d9bc3f00000040159cbabf0000000053ceb63f00000020da4d7cbf000000a0d89579bf000000e07909b0bf00000000d52aaa3f00000060dbb8bebf00000000ba4ca7bf000000c08b4fbc3f000000e074f6c6bf000000004351ca3f000000402401c43f0000000013a9b43f000000c0a2d0bc3f000000201095c53f000000c049aca13f0000000009fa923f0000002055cd9dbf00000080158ec4bf00000040d951abbf000000809aa5bc3f000000603e92a43f000000c0e38cc73f000000c0807faa3f, 1, 0, NULL, NULL, NULL, NULL, NULL, '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2025-02-05 09:15:52', 1, 1, 3, 32),
(5, 'studen2', '57a7ea46a6c58f62f02a782bd0fb6ee8', 'student1@gmail.com', 'student', 'student', 'student', 0, '1739161395006-.jpg', 0x000000402555c0bf000000c06407c03f000000a0ddb79c3f000000c041199bbf00000020ba90bbbf000000005be4b0bf00000000afdda3bf000000a017dfbdbf000000c03930c13f000000601418a4bf000000602474cf3f000000207c37bcbf000000c038f4cabf000000c093bbc0bf000000402e73873f000000a04f04c73f00000040482ac6bf000000a09c9cbcbf000000807a5cb2bf00000000972a65bf000000e0171daa3f0000006046139bbf00000080fd64ad3f000000800e94ad3f000000205ca8aabf000000004eb6d9bf00000080589eb9bf000000e054e5b7bf000000c095d8b93f0000004081d5acbf0000004068a5b9bf000000c040d9973f000000408efaccbf000000c0f488c0bf00000020a14e933f000000c0000ea53f000000801abd96bf000000a0055daebf000000603806cb3f00000020829ba1bf0000004033d1ccbf0000000070c887bf000000401c50903f00000040abdfcc3f000000a07d06c53f000000e0b33bb43f00000080f960a13f000000801aefbdbf0000000041acba3f000000609245c3bf00000060a6a5943f000000802464c63f00000060992cb93f000000c07f60a03f00000040eb8ca4bf000000200ff0c4bf0000002043e2843f000000605144bd3f00000040a300c4bf000000c0889d9abf000000c06532b03f000000e06465b0bf00000080cad79bbf000000a03743b2bf000000a0bc77d43f000000a02755b03f000000c05920bebf000000402c19c0bf000000c0fb6cc03f000000a013e0b6bf0000002052daa23f000000e091abaa3f00000020e038c6bf00000080a269c8bf00000000d4c5d2bf000000c073cdad3f0000006073bfd73f00000080bf70ac3f000000609558ccbf000000a03436923f00000000ae50c0bf000000408c97913f000000a0a7d1bd3f000000a0094ac43f000000806694a1bf000000c003709e3f000000e0a38abcbf000000807fd690bf00000020bb39c73f000000c02aa5c0bf000000e0d35d903f000000c00e89cc3f000000c00f039a3f000000003e6abd3f00000080885f6d3f00000000a5547b3f00000020b90eb3bf000000c07d37603f000000804c1cb9bf000000807a2a983f00000020b097a83f00000080e3c971bf000000c0e35282bf000000007538bc3f00000020fe25c1bf000000c05f5db03f0000004066d3a33f0000004099f89a3f0000008061c5513f000000a028fea9bf000000608a1b9fbf00000080a4c1c6bf00000060e53eb83f000000c0fb89ccbf000000c09acfc83f000000c0a516c93f000000406afd713f000000e058eec33f000000e0771eb43f000000408ce7ba3f00000000c2dd71bf00000000281d523f000000602ef8c4bf00000000045c9f3f000000c0fd53c43f000000c0100396bf00000040a1229c3f00000060207692bf, 1, 0, NULL, NULL, NULL, NULL, NULL, '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2025-02-06 06:59:56', 1, 1, 3, 32),
(6, 'studen3', '57a7ea46a6c58f62f02a782bd0fb6ee8', 'student1@gmail.com', 'student', 'student', 'student', 0, '1739161424558-.jpg', 0x000000402555c0bf000000c06407c03f000000a0ddb79c3f000000c041199bbf00000020ba90bbbf000000005be4b0bf00000000afdda3bf000000a017dfbdbf000000c03930c13f000000601418a4bf000000602474cf3f000000207c37bcbf000000c038f4cabf000000c093bbc0bf000000402e73873f000000a04f04c73f00000040482ac6bf000000a09c9cbcbf000000807a5cb2bf00000000972a65bf000000e0171daa3f0000006046139bbf00000080fd64ad3f000000800e94ad3f000000205ca8aabf000000004eb6d9bf00000080589eb9bf000000e054e5b7bf000000c095d8b93f0000004081d5acbf0000004068a5b9bf000000c040d9973f000000408efaccbf000000c0f488c0bf00000020a14e933f000000c0000ea53f000000801abd96bf000000a0055daebf000000603806cb3f00000020829ba1bf0000004033d1ccbf0000000070c887bf000000401c50903f00000040abdfcc3f000000a07d06c53f000000e0b33bb43f00000080f960a13f000000801aefbdbf0000000041acba3f000000609245c3bf00000060a6a5943f000000802464c63f00000060992cb93f000000c07f60a03f00000040eb8ca4bf000000200ff0c4bf0000002043e2843f000000605144bd3f00000040a300c4bf000000c0889d9abf000000c06532b03f000000e06465b0bf00000080cad79bbf000000a03743b2bf000000a0bc77d43f000000a02755b03f000000c05920bebf000000402c19c0bf000000c0fb6cc03f000000a013e0b6bf0000002052daa23f000000e091abaa3f00000020e038c6bf00000080a269c8bf00000000d4c5d2bf000000c073cdad3f0000006073bfd73f00000080bf70ac3f000000609558ccbf000000a03436923f00000000ae50c0bf000000408c97913f000000a0a7d1bd3f000000a0094ac43f000000806694a1bf000000c003709e3f000000e0a38abcbf000000807fd690bf00000020bb39c73f000000c02aa5c0bf000000e0d35d903f000000c00e89cc3f000000c00f039a3f000000003e6abd3f00000080885f6d3f00000000a5547b3f00000020b90eb3bf000000c07d37603f000000804c1cb9bf000000807a2a983f00000020b097a83f00000080e3c971bf000000c0e35282bf000000007538bc3f00000020fe25c1bf000000c05f5db03f0000004066d3a33f0000004099f89a3f0000008061c5513f000000a028fea9bf000000608a1b9fbf00000080a4c1c6bf00000060e53eb83f000000c0fb89ccbf000000c09acfc83f000000c0a516c93f000000406afd713f000000e058eec33f000000e0771eb43f000000408ce7ba3f00000000c2dd71bf00000000281d523f000000602ef8c4bf00000000045c9f3f000000c0fd53c43f000000c0100396bf00000040a1229c3f00000060207692bf, 1, 0, NULL, NULL, NULL, NULL, NULL, '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2025-02-06 06:59:56', 1, 1, 1, 32);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
