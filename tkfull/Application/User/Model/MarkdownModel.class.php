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
    protected $_map = array(
        "mid" => "mark_id",
        "title" => "mark_title",
        "content" => "mark_content",
        "html_content" => "mark_html_content",
        "start_time" => "mark_start_time",
        "update_time" => "mark_update_time",
        "state" => "mark_state",
        "user_id" => "mark_user_id",
    );

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
                $callback = array('message' => '非法请求', 'data' => null, 'status' => 0);
                break;
            case 3:
                $callback = array('message' => '创建成功', 'data' => $data, 'status' => 200);
                break;
            case 4:
                $callback = array('message' => '更新成功', 'data' => $data, 'status' => 200);
                break;
            default :
                $callback = array('message' => '查询成功', 'data' => $data, 'status' => 200);
                break;
        }
        return $callback;
    }

    function createOrEdit_Article($params = null) {
        if (empty($params) || !$params) {
            return response(2);
        }
        $param = $this->parseFieldsMap($params, 2);
        $keyId = $param['mark_id'];
        if ($keyId) {
            $param['mark_update_time'] = time();
            $row = $this->where("mark_id='{$keyId}'")->save($param);
            //var_dump($this->getLastSql());
            return response(4, array("row" => $row));
        } else {
            $param['mark_id'] = getCreateUUID();
            $param['mark_start_time'] = time();
            $param['mark_update_time'] = $param['mark_start_time'];
            $row = $this->add($param);
            return response(3, array("row" => $row));
        }
    }

    function findById($mid = null) {
        if (empty($mid) || empty($mid['mid']) || !$mid) {
            return response(1);
        }
        $res = $this->where("mark_id='{$mid['mid']}'")->field('mark_id,mark_title,mark_content,mark_state,mark_user_id')->find();
        $resp = $this->parseFieldsMap($res);
        return response(null, $resp);
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
