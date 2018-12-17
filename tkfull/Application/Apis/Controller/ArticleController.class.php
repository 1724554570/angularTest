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
    public function setArticleContent() {
        // $id = I('id');
        // if(!$id){
        //     $id = getCreateUUID();
        // }
        // $_SERVER['HTTP_CONTENT_TOKEN']
        $request_body = file_get_contents('php://input');
        $data1 = json_decode($request_body, true);
        $data['mid'] = $data1['articleId'];
        $data['title'] = $data1['articleTitle'];
        $data['content'] = $data1['articleContent'];
        $data['html_content'] = $data1['articleContentHtml'];
        $data['state'] = $data1['state'];
        $data['user_id'] = '1';
        if ($data1['state']) {
            $data['user_id'] = $data1['user_id'];
        }
        $res = $this->markdownApi->createOrEdit_Article($data);
        $this->ajaxReturn($res);
    }

    public function findById(){
        $request_body = file_get_contents('php://input');
        $data = json_decode($request_body, true);
        $res = $this->markdownApi->findById($data);
        $this->ajaxReturn($res);
    }
}
