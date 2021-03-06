<?php

namespace User\Model;

use Think\Model;

/**
 * 会员模型
 */
class UsersModel extends Model {

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

    public function login($username, $password, $type = 1) {
        if (empty($username) || empty($password)) {
            return -6; //未知错误！
        }
        //if (!check_verify($verify)) {
        //    return -3; //验证码错误
        //}
        $map = array();
        switch ($type) {
            case 1:
                $map['username'] = $username;
                break;
            default:
                return 0; //参数错误
        }
        /* 获取用户数据 */
        $user = $this->where($map)->field('id as uid,username,userpass,imgurl,ctime,state')->find();
        if (is_array($user) && $user['state']) {
            if (MD5($password) === $user['userpass']) {
                unset($user['userpass']);
                return $user;
            } else {
                return -10; //密码错误
            }
        } else {
            return -1; //用户不存在或被禁用
        }
    }

    /**
     * 获取用户信息
     * @param  string  $uid         用户ID或用户名
     * @param  boolean $is_username 是否使用用户名查询
     * @return array                用户信息
     */
    public function getInfo($uid = '') {
        $map = array();
        if (empty($uid) || !$uid) {
            return 0;
        }
        $map['id'] = $uid;
        $user = $this->where($map)->field('id,username,imgurl,ctime,state')->find();
        if (is_array($user) && $user['state'] = 1) {
            return $user;
        } else {
            return -1; //用户不存在或被禁用
        }
    }

    /**
     * 分页查询数据
     * @param type $s 开始数
     * @param type $e 结束数
     */
    public function lists($key, $s, $e) {
        $limit = '0,10';
        if (!empty($s)) {
            $limit = (($s - 1) * 10) . ',10';
        }
        $where = array();
        if (!empty($key)) {
            $where [] = "username like '%" . $key . "%'";
        }
        $total = $this->where($where)->count();
        $lists = $this->where($where)->field('id as uid,username,imgurl,ctime')->limit($limit)->select();
        //var_dump($this->getLastSql());
        $len = count($lists);
        while ($len--) {
            $lists[$len]['ctime'] = date('Y-m-d H:i:s', $lists[$len]['ctime']);
        }
        return array('total' => $total, 'users' => $lists);
    }

    /**
     * 注册用户验证
     * @param type $name
     * @param type $pwd
     * @param type $valid
     */
    public function register($data = '') {
        if (empty($data) || empty($data['username']) || empty($data['userpass']) || empty($data['device'])) {
            return -6;
        }
        $row = $this->info($data['username'], true);
        if (0 < $row) {
            return -1;
        } else {
            $this->add($data);
            return 11;
        }
    }

}
