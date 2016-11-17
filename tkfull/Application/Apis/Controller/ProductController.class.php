<?php

namespace Apis\Controller;

use Think\Model;

class ProductController extends AllController {

    const TABLENAME = "tk_pro";
    const USERTABLE = "tk_user";

    public function index() {
        
    }

    public function getProduct() {
        $model = new Model();
        $tab_pro = self::TABLENAME;
        $tab_user = self::USERTABLE;
        $rows = $model->query("select p.id,p.productname,p.proctime,p.proctime,u.id as uid,u.username,u.imgurl from {$tab_pro} as p left join {$tab_user} as u on u.id=p.foruser order by p.proctime desc limit 0,30");
        if ($rows) {
            $this->ajaxReturn(array('status' => 1, 'pro' => $rows));
        } else {
            $this->ajaxReturn(array('status' => 0, 'pro' => $rows));
        }
    }

    public function getProductById() {
        $id = I('pro_id');
        $rows = M('pro')->where("id = {$id}")->find();
        if ($rows) {
            $rows['productdesc'] = htmlspecialchars_decode($rows['productdesc']);
            $this->ajaxReturn(array('status' => 1, 'pro' => $rows));
        } else {
            $this->ajaxReturn(array('status' => 0, 'pro' => $rows));
        }
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
        } else {
            $this->ajaxReturn(array('status' => 0, 'pro' => $rows));
        }
    }

}
