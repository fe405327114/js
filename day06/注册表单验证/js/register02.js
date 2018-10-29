$(function () {
    var error_name = true;
    var error_pwd = true;
	var error_check_pwd = true;
	var error_email = true;
	var error_check = false;

     var $name = $('#user_name');
     var $pwd = $('#pwd');
     var $cpwd = $('#cpwd');
     var $email = $('#email');
     var $allow = $('#allow');
  

    var reg=/^\w{6,15}$/;

    var val = $name.val();
    //失去焦点时判断输入的值是否为空
    $name.blur(function () {
        fn_check_name()
    }).click(function(){
        $(this).next().hide();
    })

    $allow.click(function(){
        if ($(this).prop('checked')){
            error_check = false;
            $(this).siblings('span').hide();
        }else{
            error_check = true;
            $(this).siblings('span').html('请勾选同意协议').show();
        }
    });


    function fn_check_name() {
        if (val == '') {
            $name.next().html('不能为空').show();
            error_name = true;
            return;
        }
        if (reg.test(val)){
            error_name = false;
            $name.next().hide();
        }else{
            $name.next().html('用户名是6到15个英文或数字，还可包含“_”').show();
            error_name = true;
        }

    }
})
