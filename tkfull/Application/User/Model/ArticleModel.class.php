<?php

namespace User\Model;

use Think\Model;
use User\Api\UsersApi;

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

    public function callback($data = null, $types = null) {
        $callback = array();
        switch ($types) {
            case 1:
                $callback = array('message' => '查询失败', 'data' => null, 'status' => 0);
                break;
            case 2:
                $callback = array('message' => '非法请求', 'data' => null, 'status' => -1);
                break;
            default :
                $callback = array('message' => '查询成功', 'data' => $data, 'status' => 200);
                break;
        }
        return $callback;
    }

    /**
     * 根据用户ID查询文章
     * @param type $limitStart
     * @param type $uid
     * @return type
     */
    public function getUsersArticle($limitStart, $uid) {
        if (!$uid) {
            return $this->callback(array('total' => null, 'lists' => null), 1);
        }
        $limit = '0,10';
        if (!empty($limitStart) && $limitStart) {
            $limit = (($limitStart - 1) * 10) . ',10';
        }
        $total = $this->where("foruser={$uid}")->count();
        $lists = $this->where("foruser={$uid}")->field('id,productname,proctime')->select();
        return $this->callback(array('total' => $total, 'lists' => $lists));
    }

    /**
     * 分页数据
     * @param type $articleName
     * @param type $articleType
     * @param type $limitStart
     * @param type $pageSize
     * @return type
     */
    public function lists($articleName = null, $articleType = null, $limitStart = null, $pageSize = 10) {
        $map = array();
        if ($articleName) {
            $map['productname'] = $articleName;
        }
        if ($articleType) {
            $map['prostate'] = $articleType;
        }
        $limit = "0,10";
        if (!empty($limitStart) && $limitStart) {
            $limit = (($limitStart - 1) * $pageSize) . ",10";
        }
        $total = $this->where($map)->count();
        $lists = $this->where($map)->field('id,productname,proctime,foruser,prostate')->limit($limit)->select();
        $User = new UsersApi();
        foreach ($lists as $key => $value) {
            $lists[$key]['users'] = $User->info($value['foruser']);
        }
        return $this->callback(array('total' => $total, 'lists' => $lists));
    }

    /**
     * 管理员 修改发布文章状态
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

    /**
     * 添加、修改文章
     * @param type $param
     * @param type $id
     * @return int
     */
    public function add_Article($param, $id = false) {
        if (empty($param)) {
            return -6;
        }
        if ($id) {
            $param['proutime'] = time();
            $row = $this->where("id = {$id}")->save($param);
            return $row;
        } else {
            $param['proctime'] = time();
            $param['proutime'] = $param['proctime'];
            $row = $this->add($param);
            return $row;
        }
        return 12;
    }

}
