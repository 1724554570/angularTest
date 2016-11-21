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
        $user = $this->where($map)->find();
        if (is_array($user) && $user['state']) {
            if (MD5($password) === $user['userpass']) {
                return $user;
            } else {
                return -2; //密码错误
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
    public function info($uid, $is_username = false) {
        $map = array();
        if ($is_username) { //通过用户名获取
            $map['username'] = $uid;
        } else {
            $map['id'] = $uid;
        }

        $user = $this->where($map)->field('id as uid,username,imgurl,ctime,state')->find();
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
    public function lists($s, $e) {
        $limit = '0,10';
        if (empty($s) || empty($e) || !$s || !$e) {
            
        } else {
            $limit = (($s - 1) * 10) . ',10';
        }
        $total = $this->count();
        $lists = $this->field('id as uid,username,imgurl,ctime')->limit($limit)->select();
        return array('total' => $total, 'users' => $lists);
    }

    /**
     * 注册用户验证
     * @param type $name
     * @param type $pwd
     * @param type $valid
     */
    public function register($name, $pwd, $valid) {
        if (empty($name) || empty($pwd) || empty($valid)) {
            return -3; // 参数错误
        }
    }

}
