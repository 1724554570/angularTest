<?php

namespace Apis\Controller;

use Think\Controller;

class PublicsController extends Controller {

    public function index() {
        
    }

    public function verify() {
        $verify = new \Think\Verify();
        $verify->entry(1);
    }

}
