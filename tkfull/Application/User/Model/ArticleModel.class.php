<?php

namespace User\Model;

use Think\Model;
use User\Model\UsersModel;

/**
 * 文章模型
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

    const STATE_SUCC = 1; // 发布
    const STATE_ERROR = 2; // 删除
    const STATE_FAIL = 3; // 未发布
    const STATE_OVER = 4; // 结束发布

    /**
     * 查询用户所拥有的文章 
     * @param type $s
     * @param type $e
     */

    public function getUsersArticle($s, $e, $uid) {
        $limit = '0,10';
        if (!empty($s)) {
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
    public function lists($key, $type, $s) {
        $map = array();
        if ($key) {
            $map['productname'] = $key;
        }
        if ($type) {
            $map['prostate'] = $type;
        }
        if ($s) {
            $s = (($s - 1) * 10) . ",10";
        } else {
            $s = "0,10";
        }
        $count = $this->where($map)->count();
        $lists = $this->where($map)->field('id,productname,proctime,foruser,prostate')->limit($s)->select();
        $User = new UsersModel();
        foreach ($lists as $key => $value) {
            $lists[$key]['users'] = $User->info($value['foruser']);
        }
        return array('total' => $count, 'lists' => $lists);
    }

    /**
     * 修改发布文章状态
     * @param type $id
     * @param type $state
     */
    public function editstate($id, $state) {
        $map = array();
        switch ($state) {
            case 1:
                $map['prostate'] = STATE_SUCC;
                break;
            case 2;
                $map['prostate'] = STATE_ERROR;
                break;
            case 3;
                $map['prostate'] = STATE_FAIL;
            case 4;
                $map['prostate'] = STATE_OVER;
                break;
            default :
                $map['prostate'] = 1;
                break;
        }
        $map['exadmin'] = $_SESSION['login.user']['id'];
        $res = $this->where("id={$id}")->save($map);
        var_dump($res);
    }

    /**
     * 查看详情
     * @param type $id
     * @return type
     */
    public function detail($id) {
        $map = array();
        $map['id'] = $id;
        $res = $this->where($map)->find();
        return $res;
    }

    public function add($param, $id = false) {
        if (empty($param)) {
            return -6;
        }
        if ($id) {
            
        }else{
            
        }
    }

}
