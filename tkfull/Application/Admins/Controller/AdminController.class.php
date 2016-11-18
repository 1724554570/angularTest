<?php

namespace Admins\Controller;

use Think\Controller;

class AdminController extends Controller {

    public function _initialize() {
        if (empty($_SESSION['login.user'])) {
            $this->redirect("Login/login");
        }
    }

}
