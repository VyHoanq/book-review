-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2024 at 06:15 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `review-book-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `id_author` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `biography` varchar(20) DEFAULT NULL,
  `profileImageUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `mainGenre` varchar(191) DEFAULT NULL,
  `storyGenre` varchar(191) DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `title` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `id_banner` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id_category` int(11) NOT NULL,
  `content` varchar(191) NOT NULL,
  `resume_review` varchar(191) NOT NULL,
  `imageUrl` varchar(191) NOT NULL,
  `size` varchar(191) NOT NULL,
  `format` varchar(191) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `public_id` varchar(191) NOT NULL,
  `publisher` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `id` int(11) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  `userId` int(11) NOT NULL,
  `authorId_author` int(11) DEFAULT NULL,
  `slug` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id_category` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `code` varchar(191) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `content` varchar(191) NOT NULL,
  `imageUrl` varchar(191) DEFAULT NULL,
  `review_date` datetime(3) DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `title` varchar(191) NOT NULL,
  `id` int(11) NOT NULL,
  `bookId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `bookName` varchar(191) NOT NULL,
  `userName` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `name` varchar(191) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `password` varchar(191) DEFAULT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `age` varchar(191) DEFAULT NULL,
  `role` enum('ADMIN','USER','AUTHOR','MODERATOR') NOT NULL DEFAULT 'USER',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `gender` varchar(191) DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('0c7e93bc-fb31-4834-805e-9706785240d7', '303ef79232f46dd367d68fd2f92489056a281f3c5f6413a1ac2279d5b80ec66f', '2024-09-18 15:18:52.765', '20240911063743_', NULL, NULL, '2024-09-18 15:18:52.545', 1),
('14074490-df40-4bea-ab9d-aac879ea690d', 'aafcef610817645ce80a48fac5079ee5425a65d08c8e4a576809365b6ee2e5d6', '2024-09-18 15:18:51.793', '20240906103721_fix_author_model', NULL, NULL, '2024-09-18 15:18:51.780', 1),
('1b2dbfdd-8b3c-4209-af5e-0ae92edfdfe8', 'efdf35d47c4581bbdf82354a7b3da26786f87b87fe29dbac8a261df6c4c7239f', '2024-09-18 15:18:51.483', '20240905114422_', NULL, NULL, '2024-09-18 15:18:51.428', 1),
('289c02f8-26a8-43d3-bba1-fc2f357874a2', '00cecf6193d26531a8e1217791203d9ec879b76d616d92d423681bc4c02f73d1', '2024-09-18 15:18:53.199', '20240912031709_', NULL, NULL, '2024-09-18 15:18:53.161', 1),
('3fd04dd9-bf6a-4bb2-8c93-3dea9ee1bc42', '792ddc102bbb23aefe8d9d11c0a35e113a909eb04471c85b892eb7946f3a94be', '2024-09-18 15:18:51.948', '20240909033448_', NULL, NULL, '2024-09-18 15:18:51.860', 1),
('446748d7-baaf-4127-a6ae-cb70b4e976e4', '0e92db840686c38d4a0bfb75b3a73358df8e1cef4862e1492c2f1f0d5cec5d6e', '2024-09-18 15:18:51.735', '20240906095721_', NULL, NULL, '2024-09-18 15:18:51.724', 1),
('47f00a5c-49f3-45f8-9b13-c8dd9bf2f7ac', '3789e1bf74446cc806d6546db08c0a8fb09335af38a93405cdfb130d4249848c', '2024-09-18 15:18:52.942', '20240911072538_', NULL, NULL, '2024-09-18 15:18:52.766', 1),
('503cdeb8-891a-4e3d-b20f-1c3925b34cb6', '9440010334f75763eafa9dcc8b2a18513d959af485cf4e384eab6169bafa3ed7', '2024-09-18 15:18:51.803', '20240906104028_y', NULL, NULL, '2024-09-18 15:18:51.794', 1),
('5472a478-cb94-4ff4-8c03-510197027c7a', 'e8368c1df120b5eaf893e0787805e6ccf825810544386d5e9f6fd4fd787a639e', '2024-09-18 15:18:53.846', '20240914101917_', NULL, NULL, '2024-09-18 15:18:53.714', 1),
('558aa9ce-7ca6-4b77-ab34-660f3309d699', '8e859c5ee1db883408267f653f75c95cae41f76a8eba0dcd6ab987e5a700a623', '2024-09-18 15:18:52.072', '20240909161029_', NULL, NULL, '2024-09-18 15:18:52.064', 1),
('55ca3db3-9b01-4ab5-a982-5f635f8483c5', '5d405c751c91c819e30330f7373c852cb51f2f589268d491e8f6ccf9b78ee98d', '2024-09-18 15:18:52.525', '20240911050724_', NULL, NULL, '2024-09-18 15:18:52.462', 1),
('5ce87018-c98f-4949-bf51-253e80bec4a3', '0c3f44d477b209db0ba42cf2ad5dbc1be7cbf4c17ff96dc6719a58ef46ddae39', '2024-09-18 15:18:53.684', '20240913064020_', NULL, NULL, '2024-09-18 15:18:53.673', 1),
('5f09c932-5138-44f6-98e8-e89ba868849d', 'b8e8857f1c19b611a1229ef3df7252dd5da662077807d1900bd5a476b2a709b3', '2024-09-18 15:18:52.044', '20240909145628_', NULL, NULL, '2024-09-18 15:18:51.949', 1),
('64e82968-52f3-4591-be10-c5e065f8e27c', '05abe02db0ac3af7482d1746423c6f042bda43a74a9bdb28b0c5df078cac600e', '2024-09-18 15:18:53.885', '20240916042848_', NULL, NULL, '2024-09-18 15:18:53.858', 1),
('690a727c-5131-4b0e-ad39-4ea664366865', '1d8837862d167772652522630c5a7915020f18dd5a02c7ef59e5fe87749d0e86', '2024-09-18 15:18:51.519', '20240905120135_', NULL, NULL, '2024-09-18 15:18:51.510', 1),
('6f6794e8-5714-4ad2-957b-bdd8a9b2620e', 'f49421d6f134e6122fddab663a80170c2204ec2f3344f526ed477e1eb393d42c', '2024-09-18 15:18:51.353', '20240903112737_init', NULL, NULL, '2024-09-18 15:18:51.323', 1),
('715e2e35-32bb-4fef-8513-3b6c118e04d8', '2777b368a0ebd821c6ffa161d2e64f7294bf5df09b7f7f3088d2a96797108e9e', '2024-09-18 15:18:51.859', '20240906110656_', NULL, NULL, '2024-09-18 15:18:51.804', 1),
('74683d8c-8dea-459b-81d0-f69f9e911936', 'cac83b30ec08615d6b9ea6ea20a8b3e9dadbfb4782b294b53934ee66fdedbb8d', '2024-09-18 15:18:51.411', '20240903114156_init', NULL, NULL, '2024-09-18 15:18:51.355', 1),
('8406ccfb-d5f9-4628-8c1d-86a5f90e73a6', '4cec1cb1ae0f1757cad4bdfb47036dc4fa750a7766be74dfe6ce7c0de4319e77', '2024-09-18 15:18:52.277', '20240909161846_', NULL, NULL, '2024-09-18 15:18:52.175', 1),
('85a27bcb-4c7c-490b-9e4d-f457614bd878', 'e6a539b87b32d84160adff09450179832f9f17f8f33b3d7fd891642a27ede495', '2024-09-18 15:18:52.460', '20240911045237_', NULL, NULL, '2024-09-18 15:18:52.339', 1),
('88e8b5f4-b7ff-46b2-9f01-26a26623612c', 'f60f46ec2994838fa6637c817a8b0ebd850ca9003ca238cec6d8a266f7d7d073', '2024-09-18 15:18:53.375', '20240913030850_', NULL, NULL, '2024-09-18 15:18:53.256', 1),
('93b1c3c2-8185-413d-b6d4-b2d19d4fa644', 'ceea547093a15f2d3ab3e68d25b1d7a5f5c4bd20ee45877b4f6b20d2e2db860a', '2024-09-18 15:18:53.532', '20240913044648_', NULL, NULL, '2024-09-18 15:18:53.473', 1),
('a1d7d8f4-abe2-45f6-9d2b-0cf062fa89ea', '9e7625ceb4130067b54a1ec1efc75b6c3d0b184b0c31e7462929165530ad194d', '2024-09-18 15:18:53.150', '20240912024635_', NULL, NULL, '2024-09-18 15:18:53.139', 1),
('a6436fd7-a357-4be1-bb11-a9645b43fb13', '91d0c7374df17ae70a24dc843305c5453b77f53fdaafa9153dae76fb9022a71d', '2024-09-18 15:18:51.494', '20240905115250_update_banner_model', NULL, NULL, '2024-09-18 15:18:51.484', 1),
('a68320ad-3111-46ed-ab56-448e466d091d', 'd58190f728e293c9518218a30f36bc576d91ffee103d3a23b17c9975fbf6b4e2', '2024-09-18 15:18:51.649', '20240905122310_', NULL, NULL, '2024-09-18 15:18:51.521', 1),
('a77c4908-9fb9-4b17-9c06-f6bb4c379346', '5d41c4af9d5c55a9033f5f0a4310fa04937cc49112e1c859331ab0943f1dfccd', '2024-09-18 15:18:51.661', '20240905123702_', NULL, NULL, '2024-09-18 15:18:51.650', 1),
('aa04b904-38d3-4e7c-8e43-a105a9aaa318', '122d743a0403e77ad7e0ed9447f5b8826f2fbdbc55612d936eff004dd13c2eec', '2024-09-18 15:18:53.138', '20240912024459_', NULL, NULL, '2024-09-18 15:18:53.135', 1),
('ae02c5a0-f0b7-497a-bea8-1543e9816ca0', 'fe51c10a2a4ca75edf9a20231f4d3b9e0349a8509265cc71fa1d16cbfebb9507', '2024-09-18 15:18:52.289', '20240910023412_', NULL, NULL, '2024-09-18 15:18:52.278', 1),
('ae4be4d8-8d30-4c0e-9493-d960748abd37', '9316c4af24192b5ec3e90e04b64bfe55f71d6ab4a15c015f1fc1b26e80a6d49e', '2024-09-18 15:18:53.159', '20240912025515_', NULL, NULL, '2024-09-18 15:18:53.151', 1),
('b0b04863-f889-409a-8619-b1dd3bd127eb', 'ac4b96bfd40af1d3b860f9b9f783b018c9500e9ea2fe3ad0a9e223a505a39bb9', '2024-09-18 15:18:52.303', '20240910023951_', NULL, NULL, '2024-09-18 15:18:52.291', 1),
('b0daed80-d89f-4592-a911-60159ecdc679', '8968af3a7fca734427e1ec142094ed677049d54e4b34c5e8ca6f1fbf18b0a863', '2024-09-18 15:18:52.174', '20240909161626_', NULL, NULL, '2024-09-18 15:18:52.110', 1),
('b3fb302e-6ca7-4bad-ae71-adbd357fa980', '25666603e130175eaab596859e73d6d1ec679f55f65abd72dcd9bc2d34aa1a80', '2024-09-18 15:18:53.133', '20240912023232_', NULL, NULL, '2024-09-18 15:18:53.080', 1),
('b8d77137-c042-44d7-9106-0d0cd4c894aa', 'bf91db6dd58af2ea74f98af029ff9f23078758413d84f9d6ff4575ab1d178d46', '2024-09-18 15:18:53.856', '20240914105653_', NULL, NULL, '2024-09-18 15:18:53.847', 1),
('bbaf62cb-7625-4aa1-b78e-7d4a222ee656', '11b1e0ba57f046b19f1a8225d15510abff4d7882b40c32664301748ae27d6e85', '2024-09-18 15:18:53.897', '20240916155524_', NULL, NULL, '2024-09-18 15:18:53.888', 1),
('bd08cd5b-669c-44a1-a5fc-49e62c6fffd1', '17f0c6fb9d9f974a7613f4c4af9cb3400c6b119aacf6e19bb1a2ae3865bb3310', '2024-09-18 15:18:53.078', '20240911153943_', NULL, NULL, '2024-09-18 15:18:52.943', 1),
('bf41d9cd-15d0-4dbf-b238-bc3895290df0', '3042306c4fd04b9c58a170ff15fc2dc28821cfd64f7661433b342a606562325a', '2024-09-18 15:18:51.778', '20240906100046_fix_author_model', NULL, NULL, '2024-09-18 15:18:51.737', 1),
('c71ef543-ff98-4e6a-bc4b-4c48ba384697', '6d29bcbf1f02df1941433867b50b718f9810fb561e68d4d506baf322f2e29045', '2024-09-18 15:18:53.712', '20240914100805_', NULL, NULL, '2024-09-18 15:18:53.686', 1),
('cdfdb3d6-ea01-425f-9f0e-1ad80d95521c', '83ab90121a221da69aca837eb9d37fbef0939014a1e4122173b07d550e403acd', '2024-09-18 15:18:52.337', '20240910025459_', NULL, NULL, '2024-09-18 15:18:52.323', 1),
('ceacd844-17d4-4303-a4b0-b2c91b997ab0', '3f78e5fee680b4f0bff236d4177e6588d942469b34e7eb0082409835d23b60f1', '2024-09-18 15:18:52.543', '20240911051708_', NULL, NULL, '2024-09-18 15:18:52.526', 1),
('cfb0edc9-47e0-4747-9798-dd431f49cc96', 'bd9b1f8d4dbfd53e99db20e710bcd6e82b5774377e3c0d1bee7c8627950aafe0', '2024-09-18 15:18:51.507', '20240905115855_', NULL, NULL, '2024-09-18 15:18:51.496', 1),
('d240e19c-b3dc-40a9-84d1-1db2b2662867', 'be132aa560b02c75400c92542be7a05a462fe3d5fb79cce67ba7c96ad8213d97', '2024-09-18 15:18:53.471', '20240913033303_', NULL, NULL, '2024-09-18 15:18:53.377', 1),
('d5e6656a-203b-41ad-adbc-05041be1f701', 'df6fd5743d8551f0d94850e015c26333aa3744e3a8898f0fae064d6f2719cb1a', '2024-09-18 15:18:52.062', '20240909150801_', NULL, NULL, '2024-09-18 15:18:52.046', 1),
('d71c6599-5396-4122-ad50-f30a404cfda6', '16a336c4a1541ec5b847af2560ef1c42704ddb2dca9f6ea6e55806145920a7d9', '2024-09-18 15:18:51.426', '20240903125139_init', NULL, NULL, '2024-09-18 15:18:51.412', 1),
('de8d68ae-b0a7-4ea4-95d9-0bd798227e25', '4d17ec52e73e00f59aa6fdc47678f523b029b4594ec093a86e5edaca38a481d7', '2024-09-18 15:18:53.255', '20240913024909_', NULL, NULL, '2024-09-18 15:18:53.201', 1),
('e20701ee-abc9-447a-943e-45e6428c5604', 'fbaf786c75d17ed48d1cd8e75d9a9a5b2d17e387704bc01f024ecff91fb3a01c', '2024-09-18 15:18:51.711', '20240905124606_', NULL, NULL, '2024-09-18 15:18:51.663', 1),
('f3c2a05a-1bad-47a9-bb23-7d20c48f53c5', 'df921310b1cdc9fcb9ba6e24cf8a17d47317e18117e52624e340b7afac9b2da7', '2024-09-18 15:19:00.078', '20240918151859_', NULL, NULL, '2024-09-18 15:18:59.977', 1),
('f466bf07-3f58-4c23-bc9a-7eeed33d5e2c', 'ccd7f23fbb1b1fc7ab3949f596415578bc254df908a49eee226e98039a0a144f', '2024-09-18 15:18:51.722', '20240906095336_', NULL, NULL, '2024-09-18 15:18:51.713', 1),
('f8740232-b0a7-484d-bf57-990de3942fe6', '049540ba194365522d2d9f8bc887bcb1a75c9fd9074e2efef8b94ff7876d260d', '2024-09-18 15:18:52.321', '20240910024332_', NULL, NULL, '2024-09-18 15:18:52.305', 1),
('f9ea4b6f-c9b0-4a85-bba0-52c0316b959d', 'bd8d8de962cfaafdb1d6b17aa4de951766105904acdba711b51dfcb3293f3957', '2024-09-18 15:18:53.671', '20240913060446_', NULL, NULL, '2024-09-18 15:18:53.534', 1),
('fec3724d-791d-4e19-9408-55528f072ce6', 'c62897a452d69f1deffbe3e8f30f0783e27b2af038fe4489b9c7cedd6f259267', '2024-09-18 15:18:52.108', '20240909161128_', NULL, NULL, '2024-09-18 15:18:52.074', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id_author`),
  ADD UNIQUE KEY `Author_id_author_key` (`id_author`),
  ADD KEY `Author_id_fkey` (`id`);

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id_banner`);

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Book_id_category_key` (`id_category`),
  ADD UNIQUE KEY `Book_slug_key` (`slug`),
  ADD KEY `Book_userId_fkey` (`userId`),
  ADD KEY `Book_authorId_author_fkey` (`authorId_author`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`),
  ADD UNIQUE KEY `Category_slug_key` (`slug`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Comment_userId_fkey` (`userId`),
  ADD KEY `Comment_bookId_fkey` (`bookId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`),
  ADD UNIQUE KEY `User_name_key` (`name`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `id_author` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `id_banner` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `author`
--
ALTER TABLE `author`
  ADD CONSTRAINT `Author_id_fkey` FOREIGN KEY (`id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `Book_authorId_author_fkey` FOREIGN KEY (`authorId_author`) REFERENCES `author` (`id_author`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Book_id_category_fkey` FOREIGN KEY (`id_category`) REFERENCES `category` (`id_category`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Book_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `Comment_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `book` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Comment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
