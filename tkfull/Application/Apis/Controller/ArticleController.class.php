<?php

namespace Apis\Controller;

use User\Api\ArticleApi;
use User\Api\MarkdownApi;

/**
 * 后台内容控制器
 */
class ArticleController extends AllController {

    public function _initialize() {
        $this->articleApi = new ArticleApi();
        $this->markdownApi = new MarkdownApi();
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

    /**
     * 
     */
    public function setArticleContent(){
        // $id = I('id');
        // if(!$id){
        //     $id = getCreateUUID();
        // }
        $data['id'] = I('id');
        $data['title'] = I('title');
        $data['content'] = I('content');
        $data['state'] = I('state');
        $data['user_id'] = '1';
        $res = $this->markdownApi->createOrAdd_Article($data);
    }

}
