<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="quality.aspx.cs" Inherits="quality" EnableViewState="False"%>
<%@ Register Src="head.ascx" TagName="head" TagPrefix="uc1" %>
<%@ Register Src="foot.ascx" TagName="foot" TagPrefix="uc3" %>

<!DOCTYPE html>
<html>
    <head id="Head1" runat="server">
        <title>品质家装</title>
        <meta name="Keywords" content="" />
        <meta name="Description" content="" />
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <link href="/static/dist/css/bootstrap.css" rel="stylesheet" type="text/css"/>
        <link href="/static/input/common.css" rel="stylesheet" type="text/css"/>
        <link href="/static/input/index.css" rel="stylesheet" type="text/css"/>
        <link href="/static/input/re.css" rel="stylesheet" type="text/css"/>
        <link href="/static/input/special.css" rel="stylesheet" type="text/css"/>
        <script src="/static/dist/jquery.min.js" type="text/javascript"></script>
        <script src="/static/dist/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="/static/scripts/jquery.flexslider-min.js" type="text/javascript"></script>
        <script src="/static/scripts/jquery.lightbox-0.5.pack.js" type="text/javascript"></script>
        <script src="/static/scripts/fun.index.js" type="text/javascript"></script>
        <script src="/static/scripts/fun.public.js" type="text/javascript"></script>
        <script src="/static/scripts/slider.js" type="text/javascript"></script>
        <script src="/static/scripts/p11.js" type="text/javascript"></script>
        <script src="/static/dist/jquery.SuperSlide.2.1.1.source.js" type="text/javascript"></script>
        <script src="/static/scripts/special.js" type="text/javascript"></script>
        <script>
            $(function () {
                $("#menu_quality").addClass("menu_select");
            });
        </script>
    </head>
    <body>
        <uc1:head id="head" runat="server"></uc1:head>

        <!--核心内容-->
        <div class="container-fluid scalewrap">
            <!-- slider -->
            <div class="row-fluid">
                <div class="col-sm-12">
                    <div class="special_con">
                        <img class="conImg" src="static/images/special_2/special_01.jpg" alt=""/>
                    </div>
                    <div class="special_con">
                        <img class="conImg" src="static/images/special_2/special_02.jpg" alt=""/>
                    </div>
                    <div class="special_con">
                        <img class="conImg" src="static/images/special_2/special_03.jpg" alt=""/>
                    </div>
                    <div class="special_con">
                        <img class="conImg" src="static/images/special_2/special_04.jpg" alt=""/>
                    </div>
                    <div class="special_con">
                        <div class="selectCon">
                            <div class="tabb2">
                                <div class="de_left">
                                    <a class="Decoration_style onActive" id="tab2_1" onmousemove="tab2(1, 8);" style="margin-top:0px;">新古典</a>
                                    <a class="Decoration_style" id="tab2_4" onmousemove="tab2(4, 8);">欧式</a>
                                    <a class="Decoration_style" id="tab2_2" onmousemove="tab2(2, 8);">新中式</a>
                                    <a class="Decoration_style" id="tab2_3" onmousemove="tab2(3, 8);">美式乡村</a>
                                    <a class="Decoration_style" id="tab2_5" onmousemove="tab2(5, 8);">现代</a>
                                    <a class="Decoration_style" id="tab2_6" onmousemove="tab2(6, 8);">混搭</a>
                                </div>
                                <div class="de_right">
                                    <div class="cont_de" id="cont2_1" style="display: block;"><img src="http://www.jinhuang.com/TopicFile/product_qzds/p1.jpg"></div>
                                    <div class="cont_de" id="cont2_2" style="display: none;"><img src="http://www.jinhuang.com/TopicFile/product_qzds/p2.jpg"></div>
                                    <div class="cont_de" id="cont2_3" style="display: none;"><img src="http://www.jinhuang.com/TopicFile/product_qzds/p3.jpg"></div>
                                    <div class="cont_de" id="cont2_4" style="display: none;"><img src="http://www.jinhuang.com/TopicFile/product_qzds/p4.jpg"></div>
                                    <div class="cont_de" id="cont2_5" style="display: none;"><img src="http://www.jinhuang.com/TopicFile/product_qzds/p5.jpg"></div>
                                    <div class="cont_de" id="cont2_6" style="display: none;"><img src="http://www.jinhuang.com/TopicFile/product_qzds/p6.jpg"></div>
                                </div>
                            </div>
                        </div>
                        <img class="conImg" src="static/images/special_2/special_05.jpg" alt=""/>
                    </div>
                    <div class="special_con">
                        <img class="conImg" src="static/images/special_2/special_06.jpg" alt=""/>
                    </div>
                    <div class="special_con">
                        <div class="SuperSlide">
                            <!--滚动块-->
                            <div id="slideBox" class="slideBox">
                                <div class="bd">
                                    <ul>
                                        <li ><p><img alt="" data-class="" data-original="http://img4.525j.com.cn/files/special/20160706w/dp_img01.jpg" width="1160" height="349" src="http://img4.525j.com.cn/files/special/20160706w/dp_img01.jpg"></p></li>
                                        <li ><p><img alt="" data-class="" data-original="http://img4.525j.com.cn/files/special/20160706w/dp_img02.jpg" width="1160" height="349" src="http://img4.525j.com.cn/files/special/20160706w/dp_img02.jpg"></p></li>
                                        <li ><p><img alt="" data-class="" data-original="http://img4.525j.com.cn/files/special/20160706w/dp_img03.jpg" width="1160" height="349" src="http://img4.525j.com.cn/files/special/20160706w/dp_img03.jpg"></p></li>
                                        <li ><p><img alt="" data-class="" data-original="http://img4.525j.com.cn/files/special/20160706w/dp_img05.jpg" width="1160" height="349" src="http://img4.525j.com.cn/files/special/20160706w/dp_img05.jpg"></p></li>
                                        <li ><p><img alt="" data-class="" data-original="http://img4.525j.com.cn/files/special/20160706w/dp_img06.jpg" width="1160" height="349" src="http://img4.525j.com.cn/files/special/20160706w/dp_img06.jpg"></p></li>
                                        <li ><p><img alt="" data-class="" data-original="http://img4.525j.com.cn/files/special/20160706w/dp_img07.jpg" width="1160" height="349" src="http://img4.525j.com.cn/files/special/20160706w/dp_img07.jpg"></p></li>
                                        <li ><p><img alt="" data-class="" data-original="http://img4.525j.com.cn/files/special/20160706w/dp_img05.jpg" width="1160" height="349" src="http://img4.525j.com.cn/files/special/20160706w/dp_img08.jpg"></p></li>
                                        <li ><p><img alt="" data-class="" data-original="http://img4.525j.com.cn/files/special/20160706w/dp_img06.jpg" width="1160" height="349" src="http://img4.525j.com.cn/files/special/20160706w/dp_img09.jpg"></p></li>
                                        <li ><p><img alt="" data-class="" data-original="http://img4.525j.com.cn/files/special/20160706w/dp_img07.jpg" width="1160" height="349" src="http://img4.525j.com.cn/files/special/20160706w/dp_img10.jpg"></p></li>
                                    </ul>
                                </div>
                                <!-- 下面是前/后按钮代码，如果不需要删除即可 -->
                                <a class="prev" href="javascript:void(0)"></a>
                                <a class="next" href="javascript:void(0)"></a>
                            </div>
                            <script type="text/javascript">
                                jQuery(".slideBox").slide({
                                    mainCell: ".bd ul",
                                    effect: "leftLoop",
                                    autoPlay: true
                                });
                            </script>
                        </div>
                        <!--8个 logo-->
                        <div class="morelogo">
                            <img class="ztlogo" src="static/images/ztlogo.jpg" alt=""/>
                        </div>
                        <!--更多品牌建材-->
                        <div class="moreppjc" onclick="MorePpjc()"></div>
                        <!--背景-->
                        <img class="conImg" src="static/images/special_2/special_07.jpg" alt=""/>
                    </div>
                    <div class="special_con">
                        <img class="conImg" src="static/images/special_2/special_08.jpg" alt=""/>
                    </div>
                    <div class="special_con">
                        <img class="conImg" src="static/images/special_2/special_09.jpg" alt=""/>
                    </div>
                </div>
            </div>

            <script>
                function MorePpjc(){
                    alert('更多品牌建材');
                }
                window.scalewrap = function () {
                    var scalenumber = new pageResponse({
                        class: 'scalewrap',
                        classFixed: 'scalefixed',
                        mode: 'auto',
                        height: '6927',
                        width: '1601'
                    });
                };
                window.onresize = scalewrap;
                scalewrap();
                $('#body').show();
            </script>
        </div>

        <uc3:foot id="foot1" runat="server"></uc3:foot>
    </body>
</html>