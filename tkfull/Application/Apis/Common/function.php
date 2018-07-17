<?php

/**
 * 错误代码过滤提示
 * @param type $number 代码块
 * @param type $msg 异常信息,可为空
 * @return string
 */
function getErrorCode($number = 0, $msg = '') {
    switch ($number) {
        case 12:
            $code = '保存失败！';
            break;
        case 11:
            $code = '注册成功！';
            break;
        case 0:
            $code = '请求参数不合法！';
            break;
        case -1;
            $code = '数据不存在或被禁用查询！';
            break;
        case -2;
            $code = $msg . '已经存在';
            break;
        case -6;
            $code = '未知错误！';
            break;
        case -10;
            $code = '密码错误！';
            break;
        case -11;
            $code = '用户名已经存在';
            break;
        case 200;
            $code = '查询/请求成功！';
            break;
        default :
            $code = '查询/请求成功！';
    }
    return $code;
}

/**
 * 
 * @param type $code    状态码
 * @param type $data    返回数据
 * @param type $number  错误信息
 * @param type $params  是否需要指明某参数
 * @return type
 */
function responseMsg($code = 201, $data = null, $number = -6, $params = '') {
    return array('code' => $code, 'data' => $data, 'massage' => $params . getErrorCode($number));
}
