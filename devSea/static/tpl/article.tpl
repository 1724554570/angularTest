<!--{*文章列表*}-->
<div id="topic_list" class="tableView">

</div>
<script type="text/html" id="articletemplate">
    <table class='bordered'>
        <thead>
            <tr>
                <th>编号{{total}}</th>
                <th>标题</th>
                <th>用户</th>
                <th>创建时间</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            {{each lists as ls i}}
            <tr>
                <td>{{ls.id}}</td>
                <td>{{ls.productname}}</td>
                <td>{{ls.users.username}}</td>
                <td>{{ls.proctime}}</td>
                <td></td>
            </tr>
            {{/each}}
        </tbody>
    </table>
</script>