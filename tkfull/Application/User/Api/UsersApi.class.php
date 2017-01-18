<?php

namespace User\Api;

use User\Api\Api;
use User\Model\UsersModel;

/**
 * 用户模型
 */
class UsersApi extends Api {

    /**
     * 构造方法，实例化操作模型
     */
    protected function _init() {
        $this->model = new UsersModel();
    }

    /**
     * 注册一个新用户
     * @param  string $username 用户名
     * @param  string $password 用户密码
     * @param  string $email    用户邮箱
     * @param  string $mobile   用户手机号码
     * @return integer          注册成功-用户信息，注册失败-错误编号
     */
    public function register($data = '') {
        return $this->model->register($data);
    }

    /**
     * 用户登录认证
     * @param  string  $username 用户名
     * @param  string  $password 用户密码
     * @param  integer $type     用户名类型 （1-用户名，2-邮箱，3-手机，4-UID）
     * @return integer           登录成功-用户ID，登录失败-错误编号
     */
    public function login($username, $password, $type = 1) {
        return $this->model->login($username, $password, $type);
    }

    /**
     * 获取用户信息
     * @param  string  $uid         用户ID或用户名
     * @param  boolean $is_username 是否使用用户名查询
     * @return array                用户信息
     */
    public function info($uid, $is_username = false) {
        return $this->model->info($uid, $is_username);
    }

    /**
     * 用户分页数据
     * @param type $s
     * @param type $e
     * @return type
     */
    public function lists($key, $s, $e) {
        return $this->model->lists($key, $s, $e);
    }

}
