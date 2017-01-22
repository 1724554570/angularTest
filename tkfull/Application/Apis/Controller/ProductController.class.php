<?php

namespace Apis\Controller;

use Think\Model;
use User\Api\ReplysApi;

/**
 * onethink_article
 */
class ProductController extends AllController {

    const TABLENAME = "onethink_article";
    const USERTABLE = "onethink_users";

    private $replyApi;

    public function _initialize() {
        $this->replyApi = new ReplysApi();
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
    public function setParms($flag = false, $id = "") {
        $tab_pro = self::TABLENAME;
        $tab_user = self::USERTABLE;
        $article = "p.id,p.productname,p.proctime,p.proutime,";
        $user = "u.id as uid,u.username,u.imgurl";
        $sql = "select {$article}{$user} from {$tab_pro} as p left join {$tab_user} as u on u.id=p.foruser order by p.proctime desc limit 0,5";
        if ($flag && $id !== "") {
            $article .= "p.productdesc,";
            $sql = "select {$article}{$user} from {$tab_pro} as p , {$tab_user} as u where u.id=p.foruser and p.id = {$id}";
        }
        return $sql;
    }

    public function getProduct() {
        $model = new Model();
        $parms = $this->setParms();
        $rows = $model->query($parms);
        if ($rows) {
            $this->ajaxReturn(array('status' => 1, 'pro' => $rows));
        }
        $this->ajaxReturn(array('status' => 0, 'pro' => $rows));
    }

    /**
     * 根据ID查询分享文章
     */
    public function getProductById() {
        $id = I('pro_id');
        $model = new Model();
        $parms = $this->setParms(true, $id);
        if ($id) {
            $row = $model->query($parms);
            $rows = $row[0];
            $rows['productdesc'] = htmlspecialchars_decode($rows['productdesc']);
            $reply = $this->replyApi->lists($id);
            $this->ajaxReturn(array('status' => 1, 'article' => $rows, 'replys' => $reply));
        }
        $this->ajaxReturn(array('status' => 0, 'article' => $rows));
    }

    public function saveProduct() {
        $data['productname'] = I('productname');
        $data['productdesc'] = I('productdesc');
        $data['propower'] = I('propower');
        $data['foruser'] = I('users');
        //$data['foruser'] = 2;
        $dataid = I('id');
        if (!empty($data) && $data['foruser']) {
            $rows = "";
            if (!empty($dataid)) {
                $data['proutime'] = time();
                $rows = M('pro')->where("id = {$dataid}")->save($data);
            } else {
                $data['proctime'] = time();
                $data['proutime'] = $data['proctime'];
                $rows = D('pro')->add($data);
            }
            $this->ajaxReturn(array('status' => 1, 'pro' => $rows));
        }
        $this->ajaxReturn(array('status' => 0, 'pro' => $rows));
    }

}
