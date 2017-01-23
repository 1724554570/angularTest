<?php

namespace User\Api;

use User\Api\Api;
use User\Model\ArticleModel;

/**
 * 文章模型
 */
class ArticleApi extends Api {

    /**
     * 构造方法，实例化操作模型
     */
    protected function _init() {
        $this->model = new ArticleModel();
    }

    /**
     * 分页数据
     * @param type $s
     * @param type $e
     * @return type
     */
    public function lists($key, $type, $s) {
        return $this->model->lists($key, $type, $s);
    }

    /**
     * 查询用户所拥有的文章
     * @param type $s
     * @param type $e
     * @param type $uid
     * @return type
     */
    public function ualists($s, $e, $uid) {
        return $this->model->getUsersArticle($s, $e, $uid);
    }

    /**
     * 修改发布文章状态
     * @param type $id
     * @param type $state
     * @return type
     */
    public function editstate($id, $state) {
        return $this->model->editstate($id, $state);
    }

    /**
     * 查看文章详情
     * @param type $id
     * @return type
     */
    public function detail($id) {
        return $this->model->detail($id);
    }

    /**
     * 添加、修改文章
     * @param type $param
     * @param type $id
     * @return type
     */
    public function addArticle($param, $id = false) {
        return $this->model->add_Article($param, $id);
    }

}
