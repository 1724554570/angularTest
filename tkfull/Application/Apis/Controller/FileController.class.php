<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Apis\Controller;

use Think\Upload;

class FileController extends AllController {

    /**
     * 文件上传
     */
    public function uploadfile() {
        $upload = new Upload(); // 实例化上传类
        $upload->maxSize = 3145728; // 设置附件上传大小
        $upload->exts = array('jpg', 'gif', 'png', 'jpeg'); // 设置附件上传类型
        $upload->rootPath = './Uploads/'; // 设置附件上传根目录
        $upload->saveName = array('date', 'Y-m-d' . '_' . time());
        $upload->savePath = ''; // 设置附件上传（子）目录
        // 上传文件 
        $info = $upload->upload();
        if (!$info) {// 上传错误提示错误信息
            var_dump($upload->getError());
            $this->ajaxReturn(array('message' => $info));
            //$this->error($upload->getError());
        } else {// 上传成功
            $this->ajaxReturn(array('message' => '上传成功！'));
            //$this->success('上传成功！');
        }
    }

}
