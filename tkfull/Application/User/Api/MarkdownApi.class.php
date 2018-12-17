<?php

namespace User\Api;

use User\Api\Api;
use User\Model\MarkdownModel;

class MarkdownApi extends Api {

    public function _init() {
        $this->model = new MarkdownModel();
    }

    

    /**
     * 添加、修改文章
     * @param type $param
     * @param type $id
     * @return type
     */
    public function createOrEdit_Article($param) {
        return $this->model->createOrEdit_Article($param);
    }

    /**
     * 
     * @param type $id
     * @return type
     */
    public function findById($id=null){
        return $this->model->findById($id);
    }

}