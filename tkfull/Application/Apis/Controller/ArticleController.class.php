<?php

namespace Apis\Controller;

use User\Api\ArticleApi;

/**
 * 后台内容控制器
 */
class ArticleController extends AllController {

    public function _initialize() {
        $this->articleApi = new ArticleApi();
    }

    /**
     * 文章分页数据
     * @param type $key         搜索关键字
     * @param type $type        搜索类型
     * @param type $startpage   查询页数(未传默认为 1)
     */
    public function getArticleLists($key = null, $type = null, $startpage = null) {
        $list = $this->articleApi->lists($key, $type, $startpage);
        $list['nhref'] = 'article';
        $this->ajaxReturn($list);
    }

}
