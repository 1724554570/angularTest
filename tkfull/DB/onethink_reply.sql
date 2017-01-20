/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50716
Source Host           : localhost:3306
Source Database       : thinkgame

Target Server Type    : MYSQL
Target Server Version : 50716
File Encoding         : 65001

Date: 2017-01-20 17:23:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `onethink_reply`
-- ----------------------------
DROP TABLE IF EXISTS `onethink_reply`;
CREATE TABLE `onethink_reply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` longtext,
  `add_time` varchar(20) DEFAULT NULL,
  `state` tinyint(1) DEFAULT '1' COMMENT '1:有效,0:无效',
  `article_id` int(11) DEFAULT NULL,
  `reply_user` varchar(30) DEFAULT NULL,
  `reply_to_id` varchar(30) DEFAULT NULL,
  `reply_to_user` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of onethink_reply
-- ----------------------------
INSERT INTO `onethink_reply` VALUES ('1', '123456252', '1479365899', '1', '3', '3', null, null);
