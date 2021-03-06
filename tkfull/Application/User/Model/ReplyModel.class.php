<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace User\Model;

use Think\Model;

/**
 * 会员模型
 */
class ReplyModel extends Model {

    /**
     * 数据表前缀
     * @var string
     */
    protected $tablePrefix = UC_TABLE_PREFIX;

    /**
     * 数据库连接
     * @var string
     */
    protected $connection = UC_DB_DSN;

    /**
     * 问题列表
     * @param type $s
     * @return type
     */
    public function reply_list($id = '', $s = '') {
        if (empty($id)) {
            return -6;
        }
        $map = array();
        $map['state'] = 1;
        $map['article_id'] = $id;
        $list = $this->where($map)->select();
        return $list;
    }

}
