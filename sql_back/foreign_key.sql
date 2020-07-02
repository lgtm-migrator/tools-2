/*
 Navicat Premium Data Transfer

 Source Server         : 本地数据库8.0
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : localhost:3306
 Source Schema         : examcoo

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 02/07/2020 16:16:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for foreign_key
-- ----------------------------
DROP TABLE IF EXISTS `foreign_key`;
CREATE TABLE `foreign_key`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `category` varchar(9) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '题型分类',
  `category_code` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '题型分类代码',
  `category_text` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '题型分类解释',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `update_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '外键表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of foreign_key
-- ----------------------------
INSERT INTO `foreign_key` VALUES (1, 'single', 's1', '单项选择题', '2020-07-01 13:29:26', '2020-07-01 13:31:39');
INSERT INTO `foreign_key` VALUES (2, 'multiple', 's2', '多项选择题', '2020-07-01 13:29:26', '2020-07-01 13:31:39');
INSERT INTO `foreign_key` VALUES (3, 'determine', 's3', '判断题', '2020-07-01 13:29:26', '2020-07-01 13:31:39');

SET FOREIGN_KEY_CHECKS = 1;
