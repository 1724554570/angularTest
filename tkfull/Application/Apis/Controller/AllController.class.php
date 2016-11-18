<?php

namespace Apis\Controller;

use Think\Controller;

class AllController extends Controller {

    public function _initialize() {
        
    }

    public function index() {
        $data = array('code' => 404, message => "找不到页面！！");
        $this->assign('err', $data);
        $this->display('err:index');
    }

}
