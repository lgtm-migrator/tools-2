<?php
require_once dirname(dirname(__DIR__)) . "/vendor/autoload.php";

use Endroid\QrCode\ErrorCorrectionLevel;
use Endroid\QrCode\LabelAlignment;
use Endroid\QrCode\QrCode;

if (!function_exists('create_qrcode')) {
    function create_qrcode(string $text, array $options = null, string $writeFile = null)
    {
        if (null === $text) return false;

        if (null === $options) {
            $options = array(
                'Size' => 300,
                'WriterByName' => 'png',
                'Margin' => 5,
                'Encoding' => 'UTF-8',
                'ErrorCorrectionLevel' => ErrorCorrectionLevel::HIGH(),
                'ForegroundColor' => array('r' => 0, 'g' => 0, 'b' => 0, 'a' => 0),
                'BackgroundColor' => array('r' => 255, 'g' => 255, 'b' => 255, 'a' => 0),
                'LabelContent' => '灵活码',
                'LabelFontSize' => 14,
                'LabelFontPath' => __DIR__ . '/assets/fonts/msyhl.ttc',
                'LabelAlignment' => LabelAlignment::CENTER(),
                'LabelMargin' => array('t' => 0, 'r' => 10, 'b' => 5, 'l' => 10,),
                'LogoPath' => __DIR__ . '/assets/images/g.jpg',
                'LogoWidth' => 50,
                'LogoHeight' => 50,
                'RoundBlockSize' => true,
                'ValidateResult' => false,
                'WriterOptions' => array('exclude_xml_declaration' => true),
            );
        }

        // 创建基本的QR码
        $qrCode = new QrCode($text);
        $qrCode->setSize($options['Size']);

        // 设定进阶选项
        $qrCode->setWriterByName($options['WriterByName']);
        $qrCode->setMargin($options['Margin']);
        $qrCode->setEncoding($options['Encoding']);
        $qrCode->setErrorCorrectionLevel($options['ErrorCorrectionLevel']);
        $qrCode->setForegroundColor($options['ForegroundColor']);
        $qrCode->setBackgroundColor($options['BackgroundColor']);
        $qrCode->setLabel($options['LabelContent'], $options['LabelFontSize'], $options['LabelFontPath'], $options['LabelAlignment'], $options['LabelMargin']);

        try {
            $qrCode->setLogoPath($options['LogoPath']);
        } catch (Endroid\QrCode\Exception\InvalidPathException $e) {
            die($e->getMessage());
        }
        $qrCode->setLogoSize($options['LogoWidth'], $options['LogoHeight']);

        $qrCode->setRoundBlockSize($options['RoundBlockSize']);
        $qrCode->setValidateResult($options['ValidateResult']);
        $qrCode->setWriterOptions($options['WriterOptions']);

//        保存到文件
        if (null !== $writeFile) {
            $qrCode->writeFile($writeFile);
        }

//        创建一个响应对象
//        $response = new QrCodeResponse($qrCode);
//        if (null !== $QrCodeResponse && true === $QrCodeResponse) {
//            return new QrCodeResponse($qrCode);
//        }

//        直接输出二维码
        header('Content-Type: ' . $qrCode->getContentType());
        return $qrCode->writeString();

    }
}

$options = array(
    'Size' => 300,
    'WriterByName' => 'png',
    'Margin' => 5,
    'Encoding' => 'UTF-8',
    'ErrorCorrectionLevel' => ErrorCorrectionLevel::HIGH(),
    'ForegroundColor' => array('r' => 255, 'g' => 0, 'b' => 0, 'a' => 0),
    'BackgroundColor' => array('r' => 255, 'g' => 255, 'b' => 255, 'a' => 0),
    'LabelContent' => '灵活码',
    'LabelFontSize' => 14,
    'LabelFontPath' => __DIR__ . '/assets/fonts/msyhl.ttc',
    'LabelAlignment' => LabelAlignment::CENTER(),
    'LabelMargin' => array('t' => 0, 'r' => 10, 'b' => 5, 'l' => 10,),
    'LogoPath' => __DIR__ . '/assets/images/g.jpg',
    'LogoWidth' => 50,
    'LogoHeight' => 50,
    'RoundBlockSize' => true,
    'ValidateResult' => false,
    'WriterOptions' => array('exclude_xml_declaration' => true),
);

$save_file_path = '../../upload/qrcode_img/qrcode.png';
//echo $save_file_path;
echo create_qrcode('00000', $options, $save_file_path);
