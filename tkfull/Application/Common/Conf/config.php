<?php

return array(
    //数据库链接
    'DB_TYPE' => 'mysql',
    'DB_HOST' => 'localhost',
    'DB_NAME' => 'thinkgame',
    'DB_USER' => 'root',
    'DB_PWD' => 'root',
    'DB_PORT' => 3306,
    'DB_PREFIX' => 'tk_',
    'DB_CHARSET' => 'utf8',
    'DB_DEBUG' => TRUE,
    //'配置项'=>'配置值'
    'TMPL_TEMPLATE_SUFFIX' => '.html',
    // 伪静态
    'URL_HTML_SUFFIX' => '',
    // php  过滤
    'DEFAULT_FILTER' => 'htmlspecialchars',
    // 点语法默认解析
    'TEMP_VAR_IDENTIFY' => 'array'
);
