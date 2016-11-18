<?php

namespace Apis\Controller;

use Think\Model;

class UsersController extends AllController {

    public function index() {
        $data = array('code' => 404, message => "找不到页面！！");
        $this->assign('err', $data);
        $this->display('err:index');
    }

    public function getUserinfo() {
        $model = new Model();
        $rows = $model->query("select id as uid,username,imgurl,ctime from tk_user");
        if ($rows) {
            $this->ajaxReturn(array('status' => 1, 'users' => $rows));
        } else {
            $this->ajaxReturn(array('status' => 0, 'users' => $rows));
        }
    }

    public function getArtById() {
        $id = I('id');
        if ($id) {
            $rows = M('user')->where("id={$id}")->field('id as uid,username,imgurl,ctime')->find();
            $rows2 = M('pro')->where("foruser={$id}")->field('id,productname,proctime')->limit(10)->select();
            $this->ajaxReturn(array('status' => 1, 'users' => $rows, 'pros' => $rows2));
        } else {
            $this->ajaxReturn(array('status' => 0, 'users' => $rows, 'pros' => $rows2));
        }
    }

}
