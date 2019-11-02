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

 Date: 03/11/2019 00:17:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for visitor_information
-- ----------------------------
DROP TABLE IF EXISTS `visitor_information`;
CREATE TABLE `visitor_information`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `REMOTE_ADDR` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'IP',
  `REMOTE_PORT` int(5) NOT NULL COMMENT '用户连接到服务器时所使用的端口',
  `REMOTE_HOST` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '正在浏览当前页面用户的主机名',
  `HTTP_REFERER` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '链接到当前页面的前一页面的 URL 地址',
  `REQUEST_METHOD` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '访问页面时的请求方法。例如：“GET”、“HEAD”，“POST”，“PUT”',
  `User_Agent_Browser` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '根据User_Agent判断出来的浏览器',
  `User_Agent_Browser_version` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '根据User_Agent判断出来的浏览器版本',
  `User_Agent_Engine` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '根据User_Agent判断出来的浏览器内核',
  `User_Agent_System` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '根据User_Agent判断出来的系统平台',
  `HTTP_USER_AGENT` varchar(140) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户User_Agent',
  `create_data` datetime(6) NOT NULL COMMENT '创建时间',
  `mysql_created` datetime(6) NOT NULL ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '数据库记录创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '记录访客信息' ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
