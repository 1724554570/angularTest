<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace User\Api;

use User\Api\Api;
use User\Model\ArticleModel;

class ReplysApi extends Api {

    protected function _init() {
        $this->model = new ArticleModel();
    }

}
