<?php

namespace Apis\Controller;

use User\Api\UsersApi;
use User\Api\ArticleApi;

class UsersController extends AllController {

    private $userApi;
    private $articleApi;

    public function _initialize() {
        $this->userApi = new UsersApi();
        $this->articleApi = new ArticleApi();
    }

    public function index() {
        $data = array('code' => 404, message => "找不到页面！！");
        $this->assign('err', $data);
        $this->display('err:index');
    }

    /**
     * 查询用户信息
     * @param type $uid
     */
    public function findUserById($uid) {
        $user = $this->userApi->info($uid);
        if (!$user) {
            return $this->ajaxReturn(responseMsg(201, null, $user, '用户ID'));
        }
        return $user;
    }

    /**
     * 
     */
    public function getArticleByUserId() {
        $uid = I('id');
        $user = $this->findUserById($uid);
        if ($uid) {
            $article = $this->articleApi->ualists(1, 10, $uid);
            if (!$article) {
                $this->ajaxReturn(responseMsg(201, null, $article));
            }
            $this->ajaxReturn(responseMsg(200, array('user' => $user, 'article' => $article), 200));
        }
        $this->ajaxReturn(array('status' => 0, 'users' => null, 'article' => null));
    }

    /**
     * 用户拥有文章
     * @param int $s
     * @param int $e
     * @param type $uid
     */
    public function ulists($s = null, $e = null, $uid = null) {
        if (empty($uid)) {
            $this->ajaxReturn(array('status' => 0, 'users' => null, 'totals' => 0, 'article' => null));
        }
        if (empty($s) && empty($e)) {
            $s = 1;
            $e = 10;
        }
        $list = $this->articleApi->ualists($s, $e, $uid);
        $info = $this->userApi->info($uid);
        $this->ajaxReturn(array('status' => 1, 'users' => $info, 'total' => $list['total'], 'article' => $list['lists']));
    }

    /**
     * 分页用户信息
     * @param int $s
     * @param int $e
     */
    public function lists($key = null, $pageNum = null, $e = null) {
        if (empty($pageNum) && empty($e)) {
            $pageNum = 1;
            $e = 10;
        }
        $list = $this->userApi->lists($key, $pageNum, $e);
        $this->ajaxReturn(array('status' => 1, 'total' => $list['total'], 'users' => $list['users']));
    }

}
