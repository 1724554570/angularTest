<?php

/**
 * 系统非常规MD5加密方法
 * @param  string $str 要加密的字符串
 * @return string 
 */
function think_ucenter_md5($str, $key = 'ThinkUCenter') {
    return '' === $str ? '' : md5(sha1($str) . $key);
}

/**
 * 系统加密方法
 * @param string $data 要加密的字符串
 * @param string $key  加密密钥
 * @param int $expire  过期时间 (单位:秒)
 * @return string 
 */
function think_ucenter_encrypt($data, $key, $expire = 0) {
    $key = md5($key);
    $data = base64_encode($data);
    $x = 0;
    $len = strlen($data);
    $l = strlen($key);
    $char = '';
    for ($i = 0; $i < $len; $i++) {
        if ($x == $l)
            $x = 0;
        $char .= substr($key, $x, 1);
        $x++;
    }
    $str = sprintf('%010d', $expire ? $expire + time() : 0);
    for ($i = 0; $i < $len; $i++) {
        $str .= chr(ord(substr($data, $i, 1)) + (ord(substr($char, $i, 1))) % 256);
    }
    return str_replace('=', '', base64_encode($str));
}

/**
 * 系统解密方法
 * @param string $data 要解密的字符串 （必须是think_encrypt方法加密的字符串）
 * @param string $key  加密密钥
 * @return string 
 */
function think_ucenter_decrypt($data, $key) {
    $key = md5($key);
    $x = 0;
    $data = base64_decode($data);
    $expire = substr($data, 0, 10);
    $data = substr($data, 10);
    if ($expire > 0 && $expire < time()) {
        return '';
    }
    $len = strlen($data);
    $l = strlen($key);
    $char = $str = '';
    for ($i = 0; $i < $len; $i++) {
        if ($x == $l)
            $x = 0;
        $char .= substr($key, $x, 1);
        $x++;
    }
    for ($i = 0; $i < $len; $i++) {
        if (ord(substr($data, $i, 1)) < ord(substr($char, $i, 1))) {
            $str .= chr((ord(substr($data, $i, 1)) + 256) - ord(substr($char, $i, 1)));
        } else {
            $str .= chr(ord(substr($data, $i, 1)) - ord(substr($char, $i, 1)));
        }
    }
    return base64_decode($str);
}

function getCreateUUID() {
    if (function_exists('com_create_guid')) {
        return com_create_guid();
    } else {
        mt_srand((double) microtime() * 10000); //optional for php 4.2.0 and up.
        $charid = strtoupper(md5(uniqid(rand(), true)));
        $hyphen = chr(45); // "-"
        $str = "";
        $uuid = //chr(123).// "{"
                $str
                . substr($charid, 0, 8)
                //.$hyphen
                . substr($charid, 8, 4)
                //.$hyphen
                . substr($charid, 12, 4)
                //.$hyphen
                . substr($charid, 16, 4)
                //.$hyphen
                . substr($charid, 20, 12)
                . $str;
        //.chr(125);// "}"
        return $uuid;
    }
}

/**
 * 数据返回规范
 * @param type $types 类型: 1=>查询失败
 * @param type $data
 * @return int
 */
function response($types = null, $data = null) {
    $callback = array();
    switch ($types) {
        case 1:
            $callback = array('message' => '查询失败', 'data' => null, 'status' => 0);
            break;
        case 2:
            $callback = array('message' => '非法请求', 'data' => null, 'status' => 0);
            break;
        case 3:
            $callback = array('message' => '创建成功', 'data' => $data, 'status' => 200);
            break;
        case 4:
            $callback = array('message' => '更新成功', 'data' => $data, 'status' => 200);
            break;
        default :
            $callback = array('message' => '查询成功', 'data' => $data, 'status' => 200);
            break;
    }
    unset($types);
    return $callback;
}
