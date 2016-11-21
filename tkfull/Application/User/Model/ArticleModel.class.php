<?php

namespace User\Model;

use Think\Model;

/**
 * 会员模型
 */
class ArticleModel extends Model {

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
     * 查询用户所拥有的文章 
     * @param type $s
     * @param type $e
     */
    public function getUsersArticle($s, $e, $uid) {
        $limit = '0,10';
        if (empty($s) || empty($e) || !$s || !$e) {
            
        } else {
            $limit = (($s - 1) * 10) . ',10';
        }
        $total = $this->where("foruser={$uid}")->count();
        $lists = $this->where("foruser={$uid}")->field('id,productname,proctime')->select();
        return array('total' => $total, 'lists' => $lists);
    }

    /**
     * 分页数据
     * @param type $s
     * @param type $e
     */
    public function lists($s, $e) {
        
    }

}
