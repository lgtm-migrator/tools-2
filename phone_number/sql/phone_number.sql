/*
 Navicat Premium Data Transfer

 Source Server         : 本地数据库8.0
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3306
 Source Schema         : jzeg_tools

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 05/11/2019 00:00:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for phone_number
-- ----------------------------
DROP TABLE IF EXISTS `phone_number`;
CREATE TABLE `phone_number`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `phone_name` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '单位名称',
  `phone_nick_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '单位简称',
  `note` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '单位备注',
  `tel_number` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '座机号码',
  `mobile_number` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '手机号码',
  `static` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '是否有效',
  `regional` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '号码归属矿区',
  `department` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '号码归属科室、区队',
  `create_data` datetime(6) NOT NULL COMMENT '创建时间',
  `modify_data` datetime(6) NOT NULL COMMENT '修改时间',
  `ip` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '提交IP',
  `ip_v4` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '提交IP',
  `ip_v6` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '提交IP',
  `user_agent` varchar(140) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'User_Agent',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '记录单位电话号码' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of phone_number
-- ----------------------------
INSERT INTO `phone_number` VALUES (1, '刘一', '', '', '0319-2061234', '13888888888', 'yes', 'xingmei', 'unset', '2019-10-31 22:06:02.855439', '2019-10-31 22:06:02.855439', '', '127.0.0.1', '', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36');
INSERT INTO `phone_number` VALUES (2, '陈二', '', '', '0319-2062345', '+8613011111111', 'yes', 'xingmei', 'unset', '2019-10-31 22:06:02.855439', '2019-10-31 22:06:02.855439', '', '127.0.0.1', '', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36');
INSERT INTO `phone_number` VALUES (3, '张三', '', '', '0319-2063456', '008613022222222', 'yes', 'xingmei', 'unset', '2019-10-31 22:06:02.855439', '2019-10-31 22:06:02.855439', '', '127.0.0.1', '', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36');
INSERT INTO `phone_number` VALUES (4, '李四', '', '', '0319-2064567', '13033333333', 'yes', 'xingmei', 'unset', '2019-10-31 22:06:02.855439', '2019-10-31 22:06:02.855439', '', '127.0.0.1', '', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36');
INSERT INTO `phone_number` VALUES (5, '王五', '', '', '0319-2065678', '13044444444', 'yes', 'xingmei', 'unset', '2019-10-31 22:06:02.855439', '2019-10-31 22:06:02.855439', '', '127.0.0.1', '', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36');
INSERT INTO `phone_number` VALUES (6, '赵六', '', '', '0319-2066789', '+8613055555555', 'yes', 'xingmei', 'unset', '2019-10-31 22:06:02.855439', '2019-10-31 22:06:02.855439', '', '127.0.0.1', '', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36');
INSERT INTO `phone_number` VALUES (7, '孙七', '', '', '0319-2067890', '13066666666', 'yes', 'xingmei', 'unset', '2019-10-31 22:06:02.855439', '2019-10-31 22:06:02.855439', '', '127.0.0.1', '', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36');
INSERT INTO `phone_number` VALUES (8, '周八', '', '', '0319-2068901', '008613077777777', 'yes', 'xingmei', 'unset', '2019-10-31 22:06:02.855439', '2019-10-31 22:06:02.855439', '', '127.0.0.1', '', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36');
INSERT INTO `phone_number` VALUES (9, '吴九', '', '', '0319-2069012', '+8613088888888', 'yes', 'xingmei', 'unset', '2019-10-31 22:06:02.855439', '2019-10-31 22:06:02.855439', '', '127.0.0.1', '', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36');
INSERT INTO `phone_number` VALUES (10, '郑十', '', '', '0319-2060123', '008613099999999', 'yes', 'xingmei', 'unset', '2019-10-31 22:06:02.855439', '2019-10-31 22:06:02.855439', '', '127.0.0.1', '', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36');

SET FOREIGN_KEY_CHECKS = 1;
