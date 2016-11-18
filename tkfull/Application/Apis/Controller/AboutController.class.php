<?php

namespace Apis\Controller;

use Think\Controller;

class AboutController extends AllController {

    public function index() {
        $data = array('code' => 404, message => "找不到页面！！");
        $this->assign('err', $data);
        $this->display('err:index');
    }

    public function detail() {
        $aid = I('aid');
        if (!$aid) {
            
        }
    }

}
