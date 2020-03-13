<?php
$template_json = array(
    //找回用户信息
    "forget_user_info" => array(
        "templateCode" => "SMS_185845664",
        "templateParam" => array(
            "name" => "",
            "user_name" => "",
            "user_password" => "",
        ),
    ),
    //找回用户名
    "forget_user_name" => array(
        "templateCode" => "SMS_185820674",
        "templateParam" => array(
            "user_name" => "",
        ),
    ),
    //重置密码
    "forget_user_password" => array(
        "templateCode" => "SMS_185820662",
        "templateParam" => array(
            "user_password" => "",
        ),
    ),
    //验证码-注册
    "user_register" => array(
        "templateCode" => "SMS_185810637",
        "templateParam" => array(
            "code" => "",
        ),
    ),
    //验证码-登录
    "user_login" => array(
        "templateCode" => "SMS_185845933",
        "templateParam" => array(
            "code" => "",
        ),
    ),
    //验证码-修改密码
    "change_user_password" => array(
        "templateCode" => "SMS_185820906",
        "templateParam" => array(
            "code" => "",
        ),
    ),
    //敏感操作通知
    "Sensitive_operation_notification" => array(
        "templateCode" => "SMS_185810646",
        "templateParam" => array(
            "user_name" => "",
            "action" => "",
        ),
    ),
);
