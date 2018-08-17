<?php

namespace User\Model;

use Think\Model;
use User\Api\UsersApi;

/**
 * 文章模型
 */
class MarkdownModel extends Model {

    /**
     * 数据表前缀
     * @var string
     */
    protected $tablePrefix = UC_TABLE_PREFIX;

        /**
     * 数据库连接
     * @var string
     */
    protected $connection = UC_DB_DSN;

    const STATE_SUCCESS = 1; // 发布
    const STATE_DELETE = 2; // 删除
    const STATE_FAIL = 3; // 未发布
    const STATE_OVER = 4; // 结束发布


    public function callback($types = null, $data = null) {
        $callback = array();
        switch ($types) {
            case 1:
                $callback = array('message' => '查询失败', 'data' => null, 'status' => 0);
                break;
            case 2:
                $callback = array('message' => '非法请求', 'data' => null, 'status' => -1);
                break;
            case 3:
                $callback = array('message' => '创建成功', 'data' => $data, 'status' => 200);
                break;
            default :
                $callback = array('message' => '查询成功', 'data' => $data, 'status' => 200);
                break;
        }
        return $callback;
    }


    function createOrAdd_Article($param = null){
        if (empty($param)||!$param) {
            return $this->callback();
        }
        $row = array();
        // for($key in $param){
        //     $row["mark_$key"] = $param[$key];
        // }
        if ($id) {
            $param['mark_update_time'] = time();
            $row = $this->where("mark_id = {$id}")->save($param);
            return $row;
        } else {
            $param['mark_start_time'] = time();
            $param['mark_update_time'] = $param['mark_start_time'];
            $row = $this->add($param);
            return $row;
        }
    }



    /*
    -- ----------------------------
    -- Table structure for `onethink_markdown`
    -- ----------------------------
    DROP TABLE IF EXISTS `onethink_markdown`;
    CREATE TABLE `onethink_markdown` (
      `mark_id` varchar(80) NOT NULL COMMENT 'UUID/ID',
      `mark_title` varchar(80) DEFAULT NULL COMMENT '标题',
      `mark_content` text COMMENT 'markdown内容',
      `mark_html_content` text COMMENT 'html内容',
      `mark_start_time` varchar(50) DEFAULT NULL COMMENT '创建时间',
      `mark_update_time` varchar(50) DEFAULT NULL COMMENT '最后更新时间',
      `mark_state` tinyint(1) DEFAULT NULL COMMENT '状态：1:开启；2:草稿；0:关闭',
      `mark_user_id` varchar(80) DEFAULT NULL COMMENT '用户ID/UUID',
      PRIMARY KEY (`mark_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    
    -- ----------------------------
    -- Records of onethink_markdown
    -- ----------------------------
    */
}