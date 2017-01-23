/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
//                $('#form2').submit(function () {
//                    $(this).serialize();
//                    console.log($(this).serialize());
//                    return false;
//                });
//                $("#button").click(function () {
//                    console.log($("#form2").serialize());
//                });
    $('#form2').submit(function () {
        var form = $(this);
        if (/*!form.hasClass('fupload')||*/false) {
            //普通表单
            $.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize()
            }).success(function (res) {
                console.log(res);
                //成功提交
            }).fail(function (jqXHR, textStatus, errorThrown) {
                //错误信息
            });
        } else {
            // mulitipart form,如文件上传类
            var formData = new FormData(this);
            console.log(formData);
            $.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: formData,
                mimeType: "multipart/form-data",
                contentType: false,
                cache: false,
                processData: false
            }).success(function (res) {
                console.log(res);
                //成功提交
            }).fail(function (jqXHR, textStatus, errorThrown) {
                //错误信息
            });
        }
        ;
    });

});
