-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 03, 2023 at 08:26 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reel_keeper`
--

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `userId` int(11) NOT NULL,
  `poster_path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`id`, `createdAt`, `updatedAt`, `userId`, `poster_path`) VALUES
('1111140', '2023-05-26 20:25:30', '2023-05-26 20:25:30', 4, '/icL1zn5z1L5ULIpxkuOLjeUgURY.jpg'),
('18239', '2023-05-24 14:04:18', '2023-05-24 14:04:18', 4, '/j5jM5pq78ObAXX1WhTsb115EkLl.jpg'),
('24021', '2023-05-24 14:10:02', '2023-05-24 14:10:02', 4, '/3mFM80dPzSqoXXuC2UMvLIRWX32.jpg'),
('502356', '2023-06-02 09:57:52', '2023-06-02 09:57:52', 4, '/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `userId` int(11) NOT NULL,
  `poster_path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `createdAt`, `updatedAt`, `userId`, `poster_path`) VALUES
('105', '2023-05-28 21:56:25', '2023-05-28 21:56:25', 4, '/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg'),
('723347', '2023-06-02 12:06:16', '2023-06-02 12:06:16', 4, '/xZJjhkxHMYaBGD75jsiuH5TB6wE.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `listMovie`
--

CREATE TABLE `listMovie` (
  `listId` int(11) NOT NULL,
  `id` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `poster_path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `listMovie`
--

INSERT INTO `listMovie` (`listId`, `id`, `createdAt`, `updatedAt`, `poster_path`) VALUES
(14, '723347', '2023-06-02 12:06:20', '2023-06-02 12:06:20', '/xZJjhkxHMYaBGD75jsiuH5TB6wE.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `lists`
--

CREATE TABLE `lists` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `lists`
--

INSERT INTO `lists` (`id`, `title`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, 'Animated', '2023-06-01 08:59:20', '2023-06-01 08:59:20', 4),
(2, 'De tacitas', '2023-06-01 11:27:21', '2023-06-01 11:27:21', 4),
(14, '3', '2023-06-01 11:59:16', '2023-06-01 11:59:16', 4),
(23, 'Barbie', '2023-06-02 14:28:13', '2023-06-02 14:28:13', 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `icon` varchar(20) DEFAULT NULL,
  `refreshToken` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`, `icon`, `refreshToken`) VALUES
(1, 'quetepasaque', 'quieres@gmail.com', '$2b$10$QpiCaJ4KbhQdjABHbXBeDOWohuPHs0qscnhBjD57KQ7NX11CCZzw.', '2023-05-12 10:46:21', '2023-05-12 10:46:21', NULL, ''),
(2, 'Andrea2', 'andrea@gmail.com', '$2b$10$ZaMRtUjYf.f.owdRi88uce/YBgfPVdcvuZpC/C42U87fwzqef6Ihy', '2023-05-12 11:14:32', '2023-05-12 11:14:32', NULL, ''),
(4, 'wilkin25', 'thewilkin25@gmail.com', '$2b$10$YPuymjoxOceoOaTZQTbZOOi6wmEX9BBiV7yAixdymJdjrL1M0Vy36', '2023-05-12 15:04:21', '2023-05-21 15:22:16', NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IndpbGtpbjI1IiwiaWF0IjoxNjg0NjgyNTM2LCJleHAiOjE2ODUyODczMzZ9.JIYvkYKvOeUqcFL47ixx86TlFuB4qSzy0aHdRSYwgVw');

-- --------------------------------------------------------

--
-- Table structure for table `watchlist`
--

CREATE TABLE `watchlist` (
  `id` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `userId` int(11) NOT NULL,
  `poster_path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `watchlist`
--

INSERT INTO `watchlist` (`id`, `createdAt`, `updatedAt`, `userId`, `poster_path`) VALUES
('1016121', '2023-05-24 14:34:44', '2023-05-24 14:34:44', 4, '/bwdLflvCcOCRPqb1x13KPuYIzVx.jpg'),
('289891', '2023-05-29 09:05:40', '2023-05-29 09:05:40', 4, '/sIt4o8d1k0Fy4sC644i1HGcYlt6.jpg'),
('723347', '2023-06-02 12:06:13', '2023-06-02 12:06:13', 4, '/xZJjhkxHMYaBGD75jsiuH5TB6wE.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`userId`,`id`) USING BTREE;

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`,`userId`) USING BTREE,
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `listMovie`
--
ALTER TABLE `listMovie`
  ADD PRIMARY KEY (`listId`,`id`) USING BTREE;

--
-- Indexes for table `lists`
--
ALTER TABLE `lists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `watchlist`
--
ALTER TABLE `watchlist`
  ADD PRIMARY KEY (`id`,`userId`) USING BTREE,
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lists`
--
ALTER TABLE `lists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `listMovie`
--
ALTER TABLE `listMovie`
  ADD CONSTRAINT `listmovie_ibfk_1` FOREIGN KEY (`listId`) REFERENCES `lists` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `lists`
--
ALTER TABLE `lists`
  ADD CONSTRAINT `lists_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `watchlist`
--
ALTER TABLE `watchlist`
  ADD CONSTRAINT `watchlist_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
