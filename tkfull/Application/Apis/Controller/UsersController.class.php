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

    public function getArtById() {
        $uid = I('id');
        if ($uid) {
            $rows = $this->userApi->info($uid);
            $rows2 = $this->articleApi->ualists(1, 10, $uid);
            //$rows = M('user')->where("id={$id}")->field('id as uid,username,imgurl,ctime')->find();
            //$rows2 = M('pro')->where("foruser={$id}")->field('id,productname,proctime')->limit(10)->select();
            $this->ajaxReturn(array('status' => 1, 'users' => $rows, 'article' => $rows2));
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
        $UA = new ArticleApi();
        $User = new UsersApi;
        if (empty($s) && empty($e)) {
            $s = 1;
            $e = 10;
        }
        $list = $UA->ualists($s, $e, $uid);
        $info = $User->info($uid);
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
        $User = new UsersApi;
        $list = $User->lists($key, $pageNum, $e);
        $this->ajaxReturn(array('status' => 1, 'total' => $list['total'], 'users' => $list['users']));
    }

}
