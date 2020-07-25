/*
 Navicat Premium Data Transfer

 Source Server         : 本地数据库8.0
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : localhost:3306
 Source Schema         : jzeg_tools

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 05/07/2020 14:44:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for exam_answer_query_answer
-- ----------------------------
DROP TABLE IF EXISTS `exam_answer_query_answer`;
CREATE TABLE `exam_answer_query_answer`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '自增编号',
  `sid` bigint(0) NOT NULL COMMENT '问题ID',
  `aid` int(0) NOT NULL COMMENT '所属试卷id',
  `category` varchar(9) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '题型类别',
  `score` float(2, 1) NOT NULL COMMENT '分值',
  `result` int(0) NOT NULL COMMENT '结果数',
  `result_text` varchar(7) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '结果文本',
  `options` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '选项',
  `text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '问题文本',
  `e` int(0) NOT NULL COMMENT 'E',
  `f` int(0) NOT NULL COMMENT 'F',
  `h` int(0) NOT NULL COMMENT 'H',
  `create_time` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `update_time` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `sid_unique_btree`(`sid`, `category`) USING BTREE COMMENT '问题编号和问题类型保持唯一性'
) ENGINE = InnoDB AUTO_INCREMENT = 0 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '问题信息表' ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
