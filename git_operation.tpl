git config --globle user.name 'yxJiang'
git config --globle user.email '1724554570@qq.com'
git pull origin master  --更新代码
git push origin master  --提交代码(先更新后提交)
git reset head . --还原add操作(还原到多少个add前未测试,预计返回commit前所有add操作)/用版本库内容清空暂存区
git rm -r --cached tkfull/  移除版本跟踪
git stash 加入文件缓存区
git stash apply 返回缓存区文件
git stash lis 查看缓存区文件次数



