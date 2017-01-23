<?php

/**
 * 错误代码过滤提示
 * @param type $number 代码块
 * @param type $msg 异常信息,可为空
 * @return string
 */
function ERROR_CODE($number = 0, $msg = '') {
    $code = '查询/请求成功！';
    switch ($number) {
        case 12:
            $code = '保存失败！';
            break;
        case 11:
            $code = '注册成功！';
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
    }
    return $code;
}
