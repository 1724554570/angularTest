<?php

namespace Admins\Controller;

use Think\Controller;

class LoginController extends Controller {

    public function index() {
        
    }

    public function logins() {
        
    }

    public function verify() {
        $verify = new \Think\Verify();
        $verify->entry(1);
    }

}
