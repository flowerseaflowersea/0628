$(function(){
    $('#modify-btn').on('tap',function(){
        var originPass=$.trim($("[name='originPass']").val());
        var newPass=$.trim($("[name='newPass']").val());
        var confirmPass=$.trim($("[name='confirmNewPass']").val());
        var vCode=$.trim($("[name='vCode']").val());
        if(!originPass){
            mui.toast("请输入原密码");
            return;
        }
        if(newPass!=confirmNewPass){
            mui.toast("两次输入的密码不一致");
            return;
        }
        $.ajax({
            
        })
    })
})