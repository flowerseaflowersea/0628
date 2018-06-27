$(function(){
    //获取用户存储的收货地址
    var address=null;
    $.ajax({
        url: '/address/queryAddress',
        type: 'get',
        success:function(res){
            address=res;//存放着所有收货信息
            console.log(address);
            var html=template("addressTpl",{result:res});
            $("#address-box").html(html);
        }
    })




    // 删除
    $('#address-box').on('tap','.delete-btn',function(){
        var id=this.getAttribute('data-id');
        var li=this.parentNode.parentNode;
        mui.confirm("确认要删除吗？",function(message){
           
              if(message.index==1){
    $.ajax({
        url: '/address/deleteAddress',
					type: 'post',
					data: {
						id: id
                    },
                    success:function(res){
                        if(res.success){
                            location.reload();
                        }
                    }
    })

              }
              else{
                  //取消删除   关闭列表划出效果
             mui.swipeoutClose(li);
              }
        })
    })
    //    1.给编辑按钮添加点击事件
    $('#address-box').on('tap', '.edit-btn', function(){
        var id = this.getAttribute('data-id');
        console.log(id);
		for(var i=0;i<address.length;i++) {
			if(address[i].id == id) {
				localStorage.setItem('editAddress',JSON.stringify(address[i]));
				// 终止循环
				break;
			}
		}
		// 跳转到编辑页面
		location.href = "addAddress.html?isEdit=1";
	});
})