/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50045
Source Host           : localhost:3306
Source Database       : thinkgame

Target Server Type    : MYSQL
Target Server Version : 50045
File Encoding         : 65001

Date: 2016-10-17 20:53:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `tk_pro`
-- ----------------------------
DROP TABLE IF EXISTS `tk_pro`;
CREATE TABLE `tk_pro` (
  `id` int(11) NOT NULL auto_increment,
  `productname` varchar(50) default NULL,
  `productdesc` text,
  `proctime` varchar(20) default NULL,
  `proutime` varchar(20) default NULL,
  `prostate` tinyint(4) default '1',
  `propower` tinyint(4) default '1' COMMENT '1：全部 2：注册用户',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tk_pro
-- ----------------------------
INSERT INTO `tk_pro` VALUES ('1', '发放堵塞', '粉丝季大幅净亏损辣椒粉萨拉开房间啊森林法计算', '1476694401', '1476694401', '1', '1');
INSERT INTO `tk_pro` VALUES ('2', '法撒旦发萨芬', '撒旦法撒旦法撒旦发大水', '1476694452', '1476694452', '1', '1');

-- ----------------------------
-- Table structure for `tk_user`
-- ----------------------------
DROP TABLE IF EXISTS `tk_user`;
CREATE TABLE `tk_user` (
  `id` int(11) NOT NULL auto_increment,
  `username` varchar(50) default NULL,
  `userpass` varchar(50) default NULL,
  `imgurl` varchar(200) default NULL,
  `device` varchar(10) default NULL,
  `ctime` varchar(20) default NULL,
  `utime` varchar(20) default NULL,
  `state` tinyint(1) default '1',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tk_user
-- ----------------------------
INSERT INTO `tk_user` VALUES ('1', '12345678901', 'e10adc3949ba59abbe56e057f20f883e', null, '', '1476553169', '1476553169', '1');
INSERT INTO `tk_user` VALUES ('2', '12345678902', 'e10adc3949ba59abbe56e057f20f883e', null, '', '1476633421', '1476633421', '1');
INSERT INTO `tk_user` VALUES ('3', '12345678903', 'e10adc3949ba59abbe56e057f20f883e', null, '', '1476634060', '1476634060', '1');
