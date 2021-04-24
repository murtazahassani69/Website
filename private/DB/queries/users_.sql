

CREATE DATABASE if NOT EXISTS startup_cvtemplates_db;
CREATE TABLE IF NOT EXISTS USERS (
  
    `userId` INT(11) NOT NULL AUTO_INCREMENT,
    `creationDate` VARCHAR(100) NULL,
    `firstName` VARCHAR(100) DEFAULT NULL,
    `lastName` VARCHAR(100) DEFAULT NULL,
    `email` VARCHAR(100) DEFAULT NULL,
    `passsword` VARCHAR(100) DEFAULT NULL,
    `country` VARCHAR(100) DEFAULT NULL,
    `language` VARCHAR(100) DEFAULT NULL,
    `dateOfBirth` VARCHAR(100) DEFAULT NULL,
    `profession` VARCHAR(100) DEFAULT NULL,
    `lookingJobAt` VARCHAR(100) DEFAULT NULL,
    `gender` VARCHAR(100) DEFAULT NULL,
  
PRIMARY KEY (`userId`) USING BTREE,
INDEX `userTypeId` (`userTypeId`) USING BTREE,
	CONSTRAINT `userTypeId` FOREIGN KEY (`userTypeId`) REFERENCES `startup_cvtemplates_db`.`usertype` (`userTypeId`) ON UPDATE NO ACTION ON DELETE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

ALTER TABLE `users` ADD COLUMN `userTypeId` after userId;

INSERT INTO `users` (`userTypeId`, `creationDate`, `firstName`, `lastName`, `email`, `passsword`, `country`, `language`, `dateOfBirth`, `profession`, `lookingJobAt`, `gender`) VALUES ('1', '2021-04-18', 'Mr', 'jallow', 'jallow@gmail.com', 'password', 'greece', 'greek', `null`, 'developer', 'frontend', 'male');

use table `user`;

UPDATE `users` SET `email`='jallow@admin.io' WHERE  `userId`=1;

ALTER TABLE `users` ADD column `column13`;
ALTER TABLE `users` DROP column `column13`;

select * from `startup_cvtemplates_db`.`user`;