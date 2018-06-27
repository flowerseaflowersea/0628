$(function(){

  var isEdit=Number(getParamsByUrl(location.href,'isEdit'));
  if(isEdit){
      if(localStorage.getItem("editAddress"))
      {//在本地存储中获取数据
          var address=JSON.parse(localStorage.getItem("editAddress"));// 将数据转成对象
          var html=template("editTpl",address);
          $("#editForm").html(html);
      }
    }
      else{
          var html=template("editTpl",{});
          $("#editForm").html(html);
      }


    var picker = new mui.PopPicker({layer:3});
    picker.setData(cityData);
    $('#selectCity').on('tap',function(){
        picker.show(function(selectItems){
          $('#selectCity').val(selectItems[0].text+selectItems[1].text+selectItems[2].text);
        })
    })
     //t添加收货地址
     $("#addAddress").on('tap',function(){
         var username=$.trim($("[name='username']").val());
         var postCode = $.trim($("[name='postCode']").val());
		var city = $.trim($("[name='city']").val());
		var detail = $.trim($("[name='detail']").val());
         if(!username){
             mui.toast("请输入收货人姓名");
             return;
         }
         if(!postCode){
             mui.toast("请输入邮政编码");
             return;
         }
         var data={
             address:city,
             addressDetail:detail,
             recipients: username,
             postcode: postCode
         };
         if(isEdit){
            var url="/address/updateAddress"
            data.id=address.id;
         }
         else
         {
            var url="/address/addAddress";
         }
         $.ajax({
             url:url,
             type:'post',
             data:data,
             success:function(res){
                 if(res.success){
                     if(isEdit){
                         mui.toast("地址编辑成功"); }
                     else{
                        mui.toast("地址添加成功"); 
                     }
                    
                    setTimeout(function(){
						location.href = "address.html";
					},2000)
                 }
             }
         })
     })
})