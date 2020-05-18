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

 Date: 18/05/2020 00:00:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for payroll
-- ----------------------------
DROP TABLE IF EXISTS `payroll`;
CREATE TABLE `payroll`  (
  `upid` int(0) NOT NULL COMMENT '工资单识别符',
  `month` date NOT NULL COMMENT '工资月份',
  `date` datetime(0) NOT NULL COMMENT '到账时间',
  `name` varchar(9) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '姓名',
  `job_number` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '工号',
  `payable` bigint(0) NOT NULL COMMENT '应发工资',
  `actual_salary` bigint(0) NOT NULL COMMENT '实发工资',
  `personnel_number` int(0) NOT NULL COMMENT '人员编号',
  `Job_title_or_job_type` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '职务或工种',
  `salary_base` int(0) NULL DEFAULT NULL COMMENT '工资基数',
  `basic_salary_standard` int(0) NULL DEFAULT NULL COMMENT '基础工资标准',
  `daily_base_salary` float(2, 2) NULL DEFAULT NULL COMMENT '日基础工资',
  `floating_salary_standard` int(0) NULL DEFAULT NULL COMMENT '浮动工资标准',
  `job_coefficient` float(1, 1) NULL DEFAULT NULL COMMENT '岗位系数',
  `excess_wage_one` bigint(0) NULL DEFAULT NULL COMMENT '超额工资一',
  `excess_wage_two` bigint(0) NULL DEFAULT NULL COMMENT '超额工资二',
  `other_salary_one` bigint(0) NULL DEFAULT NULL COMMENT '其他工资一',
  `other_salary_two` bigint(0) NULL DEFAULT NULL COMMENT '其他工资二',
  `pension` bigint(0) NOT NULL COMMENT '养老保险',
  `medical_insurance` bigint(0) NOT NULL COMMENT '医疗保险',
  `unemployment_insurance` bigint(0) NOT NULL COMMENT '失业保险',
  `injury_insurance` bigint(0) NOT NULL DEFAULT 0 COMMENT '工伤保险',
  `maternity_insurance` bigint(0) NOT NULL DEFAULT 0 COMMENT '生育保险',
  `housing_fund` bigint(0) NOT NULL COMMENT '住房公积金',
  `utilities` bigint(0) NULL DEFAULT NULL COMMENT '水电费',
  `accommodation_fee` bigint(0) NULL DEFAULT NULL COMMENT '标宿费',
  `telephone_fee` bigint(0) NULL DEFAULT NULL COMMENT '电话费',
  `pension_adjustment_difference` bigint(0) NOT NULL DEFAULT 0 COMMENT '养老保险调差额',
  `personal_income_tax` bigint(0) NOT NULL DEFAULT 0 COMMENT '个人所得税',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `update_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  PRIMARY KEY (`upid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '工资单' ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
