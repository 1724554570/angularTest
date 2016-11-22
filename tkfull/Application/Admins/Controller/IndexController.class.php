<?php

namespace Admins\Controller;

use User\Api\UsersApi;

class IndexController extends AdminController {

    public function index() {
        $this->display();
    }

    /**
     * 用户列表
     * @param type $key 搜索用户昵称
     * @param type $pageNum 分页起始页
     * @param type $e 结束页，默认10
     * @return type
     */
    public function getLists($key = null, $pageNum = null, $e = null) {
        $Users = new UsersApi();
        $s = null;
        if ($pageNum) {
            $s = $pageNum;
        }
        $list = $Users->lists($key, $s, 10);
        return $this->ajaxReturn($list);
    }

}
