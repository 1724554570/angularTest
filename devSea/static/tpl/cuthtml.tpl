﻿<!--{*浏览器截图*}-->
<!--{*<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>*}-->
<!--{*<script type="text/javascript" src="http://html2canvas.hertzen.com/build/html2canvas.js"></script>*}-->

<script  type="text/javascript" >
    $(document).ready(function () {
        $(".example1").on("click", function (event) {
            event.preventDefault();
            html2canvas(document.body, {
                allowTaint: true,
                taintTest: false,
                onrendered: function (canvas) {
                    canvas.id = "mycanvas";
                    //document.body.appendChild(canvas);
                    //生成base64图片数据
                    var dataUrl = canvas.toDataURL();
                    var newImg = document.createElement("img");
                    newImg.src = dataUrl;
                    document.body.appendChild(newImg);
                }
            });
        });

    });

</script>

Hello!
<div class="" style="background-color: #abc;">
    html5页面截图
</div>
<textArea id="textArea" col="20" rows="10" ></textArea>
        <input class="example1" type="button" value="截图">
        生成界面如下：
