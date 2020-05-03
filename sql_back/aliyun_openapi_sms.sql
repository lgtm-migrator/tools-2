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

 Date: 01/05/2020 00:00:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for aliyun_openapi_sms
-- ----------------------------
DROP TABLE IF EXISTS `aliyun_openapi_sms`;
CREATE TABLE `aliyun_openapi_sms`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '自动递增编号',
  `SignName_Custom_Id` int(0) NULL DEFAULT NULL COMMENT '签名编号',
  `SignName_list` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '签名列表',
  `Version_list` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '版本列表',
  `Action_Custom_Id` int(0) NULL DEFAULT NULL COMMENT '系统规定列表编号',
  `Action_list` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '系统规定列表',
  `Message_Custom_Id` int(0) NULL DEFAULT NULL COMMENT '信息列表编号',
  `Message_list` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '信息列表',
  `Code_Custom_Id` int(0) NULL DEFAULT NULL COMMENT '自定义状态码编号',
  `Code_list` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '状态码列表',
  `Code_Message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '状态码信息',
  `Host_Custom_Id` int(0) NULL DEFAULT NULL COMMENT '服务地址编号',
  `Host_list` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '服务地址',
  `TemplateName_Id` int(0) NULL DEFAULT NULL COMMENT '自定义短信模板英文名称编号',
  `TemplateName` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '自定义短信模板英文名称列表',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `Version_list`(`Version_list`) USING BTREE,
  INDEX `Host_list`(`Host_list`) USING BTREE,
  INDEX `TemplateName`(`TemplateName`) USING BTREE,
  INDEX `Action_list`(`Action_list`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '历史短信表history_sms外键表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of aliyun_openapi_sms
-- ----------------------------
INSERT INTO `aliyun_openapi_sms` VALUES (1, NULL, '杰格网', '2017-05-25', NULL, 'SendSms', NULL, NULL, NULL, 'SignatureNonceUsed', 'Specified signature nonce was used already.', NULL, 'dysmsapi.aliyuncs.com', NULL, 'notice');
INSERT INTO `aliyun_openapi_sms` VALUES (2, NULL, NULL, NULL, NULL, 'SendBatchSms', NULL, NULL, NULL, 'SignatureDoesNotMatch', 'Specified signature is not matched with our calculation.', NULL, 'dybaseapi.aliyuncs.com', NULL, 'forget_user_info');
INSERT INTO `aliyun_openapi_sms` VALUES (3, NULL, NULL, NULL, NULL, 'QuerySendDetails', NULL, NULL, NULL, 'OK', 'OK', NULL, '1943695596114318.mns.cn-hangzhou.aliyuncs.com', NULL, 'forget_user_name');
INSERT INTO `aliyun_openapi_sms` VALUES (4, NULL, NULL, NULL, NULL, 'AddSmsSign', NULL, NULL, NULL, 'isv.TEMPLATE_PARAMS_ILLEGAL', '模版变量里包含非法关键字', NULL, NULL, NULL, 'forget_user_password');
INSERT INTO `aliyun_openapi_sms` VALUES (5, NULL, NULL, NULL, NULL, 'DeleteSmsSign', NULL, NULL, NULL, 'isv.TEMPLATE_OVER_LIMIT', '签名字符数量超过限制。', NULL, NULL, NULL, 'user_register');
INSERT INTO `aliyun_openapi_sms` VALUES (6, NULL, NULL, NULL, NULL, 'QuerySmsSign', NULL, NULL, NULL, 'isv.TEMPLATE_MISSING_PARAMETERS', '模版缺少变量', NULL, NULL, NULL, 'user_login');
INSERT INTO `aliyun_openapi_sms` VALUES (7, NULL, NULL, NULL, NULL, 'ModifySmsSign', NULL, NULL, NULL, 'isv.TEMPLATE_COUNT_OVER_LIMIT', '一个自然日中申请模板数量超过限制。', NULL, NULL, NULL, 'change_user_password');
INSERT INTO `aliyun_openapi_sms` VALUES (8, NULL, NULL, NULL, NULL, 'ModifySmsTemplate', NULL, NULL, NULL, 'isv.SMS_TEMPLATE_ILLEGAL', '短信模版不合法', NULL, NULL, NULL, 'Sensitive_operation_notification');
INSERT INTO `aliyun_openapi_sms` VALUES (9, NULL, NULL, NULL, NULL, 'QuerySmsTemplate', NULL, NULL, NULL, 'isv.SMS_SIGNATURE_SCENE_ILLEGAL', '短信所使用签名场景非法', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (10, NULL, NULL, NULL, NULL, 'AddSmsTemplate', NULL, NULL, NULL, 'isv.SMS_SIGNATURE_ILLEGAL', '短信签名不合法', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (11, NULL, NULL, NULL, NULL, 'DeleteSmsTemplate', NULL, NULL, NULL, 'isv.SMS_SIGN_ILLEGAL', '签名禁止使用', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (12, NULL, NULL, NULL, NULL, 'SmsReport', NULL, NULL, NULL, 'isv.SMS_CONTENT_ILLEGAL', '短信内容包含禁止发送内容', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (13, NULL, NULL, NULL, NULL, 'SmsUp', NULL, NULL, NULL, 'isv.SIGN_OVER_LIMIT', '签名字符数量超过限制。', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (14, NULL, NULL, NULL, NULL, 'SignSmsReport', NULL, NULL, NULL, 'isv.SIGN_NAME_ILLEGAL', '签名名称不符合规范。', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (15, NULL, NULL, NULL, NULL, 'TemplateSmsReport', NULL, NULL, NULL, 'isv.SIGN_FILE_LIMIT', '签名认证材料附件大小超过限制。', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (16, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.SIGN_COUNT_OVER_LIMIT', '一个自然日中申请签名数量超过限制。', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (17, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.PRODUCT_UNSUBSCRIBE', '产品未开通', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (18, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.PRODUCT_UN_SUBSCRIPT', '未开通云通信产品的阿里云客户', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (19, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.PARAM_NOT_SUPPORT_URL', '不支持URL', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (20, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.PARAM_LENGTH_LIMIT', '参数超出长度限制', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (21, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.OUT_OF_SERVICE', '业务停机', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (22, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.MOBILE_NUMBER_ILLEGAL', '非法手机号', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (23, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.MOBILE_COUNT_OVER_LIMIT', '手机号码数量超过限制', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (24, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.INVALID_PARAMETERS', '参数异常', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (25, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.INVALID_JSON_PARAM', 'JSON参数不合法，只接受字符串值', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (26, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.EXTEND_CODE_ERROR', '扩展码使用错误，相同的扩展码不可用于多个签名', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (27, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.DOMESTIC_NUMBER_NOT_SUPPORTED', '国际/港澳台消息模板不支持发送境内号码', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (28, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.DENY_IP_RANGE', '源IP地址所在的地区被禁用', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (29, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.DAY_LIMIT_CONTROL', '触发日发送限额', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (30, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.BUSINESS_LIMIT_CONTROL', '业务限流', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (31, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.BLACK_KEY_CONTROL_LIMIT', '黑名单管控', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (32, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.AMOUNT_NOT_ENOUGH', '账户余额不足', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (33, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.ACCOUNT_NOT_EXISTS', '账户不存在', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (34, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isv.ACCOUNT_ABNORMAL', '账户异常', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (35, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isp.SYSTEM_ERROR', 'isp.SYSTEM_ERROR', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (36, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'isp.RAM_PERMISSION_DENY', 'RAM权限DENY', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (37, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'InvalidVersion', 'Specified parameter Version is not valid.', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (38, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'InvalidTimeStamp.Expired', 'Specified time stamp or date value is expired.', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (39, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'InvalidAction.NotFound', 'Specified api is not found, please check your url and method', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (40, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (41, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (42, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (43, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (44, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (45, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (46, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (47, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (48, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (49, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (50, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
