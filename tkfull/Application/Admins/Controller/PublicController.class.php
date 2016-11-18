<?php

namespace Admins\Controller;

use Think\Controller;

class PublicController extends Controller {

    public function index() {
        
    }

    public function verify() {
        $verify = new \Think\Verify();
        $verify->entry(1);
    }

}
