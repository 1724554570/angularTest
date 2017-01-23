<?php

namespace Apis\Controller;

use Think\Model;
use User\Api\ReplysApi;
use User\Api\ArticleApi;

/**
 * onethink_article
 */
class ProductController extends AllController {

    const TABLENAME = "onethink_article";
    const USERTABLE = "onethink_users";

    //private $replyApi;
    //private $articleApi;

    public function _initialize() {
        //$this->replyApi = new ReplysApi();
        //$this->articleApi = new ArticleApi();
    }

    public function index() {
        $data = array('code' => 404, message => "找不到页面！！");
        $this->assign('err', $data);
        $this->display('err:index');
    }

    /**
     * column parameter
     * @param type $flag
     * @return type
     */
    public function setParms($id = "") {
        $tab_pro = self::TABLENAME;
        $tab_user = self::USERTABLE;
        $article = "p.id,p.productname,p.proctime,p.proutime,p.propower,";
        $user = "u.id as uid,u.username,u.imgurl";
        $sql = "select {$article}{$user} from {$tab_pro} as p left join {$tab_user} as u on u.id = p.foruser order by p.proctime desc limit 0,5";
        if (!empty($id)) {
            $article = "p.*,";
            $sql = "select {$article}{$user} from {$tab_pro} as p , {$tab_user} as u where u.id = p.foruser and p.id = {$id}";
        }
        unset($tab_pro, $tab_user, $article, $user);
        return $sql;
    }

    /**
     * 查询列表
     */
    public function findlist() {
        $model = new Model();
        $parms = $this->setParms();
        $row = $model->query($parms);
        $this->response($row);
//        if ($rows) {
//            $this->ajaxReturn(array('status' => 1, 'pro' => $rows));
//        }
//        $this->ajaxReturn(array('status' => 0, 'pro' => $rows));
    }

    /**
     * 根据ID查询分享文章
     */
    public function findbyid() {
        $id = I('pro_id');
        $model = new Model();
        $parms = $this->setParms($id);
        if ($id) {
            $row = $model->query($parms);
            $rows = $row[0];
            $rows['productdesc'] = htmlspecialchars_decode($rows['productdesc']);
            $replyApi = new ReplysApi();
            $reply = $replyApi->lists($id);
            unset($row, $replyApi);
            $this->ajaxReturn(array('status' => 1, 'article' => $rows, 'replys' => $reply));
        }
        $this->ajaxReturn(array('status' => 0, 'article' => $rows));
    }

    /**
     * 添加、修改文章
     */
    public function addarticles() {
        $data['productname'] = I('productname');
        $data['productdesc'] = I('productdesc');
        $data['propower'] = I('propower');
        $data['foruser'] = I('users');
        $id = I('id');
        $articleApi = new ArticleApi();
        $row = $articleApi->addArticle($data, $id);
        $this->response($row);
    }

    /**
     * 公共数据返回
     * @param type $row
     */
    public function response($row = '', $reply = '') {
        if (0 < $row) {
            $this->ajaxReturn(array('status' => 1, 'message' => "查询成功！", 'article' => $row, 'replys' => $reply));
        }
        $error = ERROR_CODE($row, '');
        $this->ajaxReturn(array('status' => 0, 'message' => $error, 'article' => $row));
    }

}
