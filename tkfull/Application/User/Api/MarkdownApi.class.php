<?php

namespace User\Api;

use User\Api\Api;
use User\Model\MarkdownModel;

class MarkdownApi extends Api {

    public function _initialize() {
        $this->markdownModel = new MarkdownModel();
    }

    

    /**
     * 添加、修改文章
     * @param type $param
     * @param type $id
     * @return type
     */
    public function createOrAdd_Article($param, $id = false) {
        return $this->model->createOrAdd_Article($param, $id);
    }

}