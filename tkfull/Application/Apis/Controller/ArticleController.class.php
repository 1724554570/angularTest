<?php

namespace Apis\Controller;

use User\Api\ArticleApi;

/**
 * 后台内容控制器
 */
class ArticleController extends AllController {

    private $articleApi;

    public function _initialize() {
        $this->articleApi = new ArticleApi();
    }

    /**
     * 文章分页数据
     * @param type $key 搜索关键字
     * @param type $type 搜索类型
     */
    public function getLists($key = null, $type = null, $s = null) {
        $list = $this->articleApi->lists($key, $type, $s);
        $list['nhref'] = 'article';
        $this->ajaxReturn($list);
    }

}
