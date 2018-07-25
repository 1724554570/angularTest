<?php

namespace Admins\Controller;

use User\Api\ArticleApi;

/**
 * 后台内容控制器
 */
class ArticleController extends AdminController {

    public function _initialize() {
        $this->articleApi = new ArticleApi();
    }

    /**
     * 文章分页数据
     * @param type $key 搜索关键字
     * @param type $type 搜索类型
     */
    public function getArticleLists() {
        $articleName = null;
        $articleType = null;
        $limitStart = null;
        $pageSize = 10;
        $list = $this->articleApi->lists($articleName, $articleType, $limitStart, $pageSize);
        $this->ajaxReturn($list);
    }

}
