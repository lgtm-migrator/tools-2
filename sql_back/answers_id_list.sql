/*
 Navicat Premium Data Transfer

 Source Server         : 本地数据库8.0
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : jzeg_tools

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 15/09/2020 14:00:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for answers_id_list
-- ----------------------------
DROP TABLE IF EXISTS `answers_id_list`;
CREATE TABLE `answers_id_list`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '自增编号',
  `a_id` int(0) NOT NULL COMMENT 'id 试卷编号',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'a 标题',
  `b` int(0) NULL DEFAULT NULL COMMENT 'b 创建者ID',
  `c` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'c 录入者1',
  `d` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'd 录入者2',
  `e` int(0) NULL DEFAULT NULL COMMENT 'e 总题数或者总分',
  `f` int(0) NOT NULL COMMENT 'f 出卷时间 时间戳',
  `f_datetime` datetime(0) NOT NULL COMMENT '出卷时间可视化',
  `h` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'h 答题时间',
  `i` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'i',
  `j` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'j',
  `l` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'l',
  `m` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'm',
  `n` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'n',
  `o` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'o 信息登记 json格式',
  `p` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'p',
  `create_time` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `update_time` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '问题编号列表' ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
