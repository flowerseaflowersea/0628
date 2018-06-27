$(function(){
    $('#search-btn').on('click',function(){
        var keyword=$(this).siblings('input').val();
        if(keyword){
            //用户输入了关键字存在数组中
            keyArr.push(keyword);
            //将关键字数组存储在本地
            //localStorage中只能存贮字符串
            localStorage.setItem('keyArr',JSON.stringify(keyArr));
           location.href="search-result.html?keyword="+keyword
        }
        else{
  alert('请输入要搜索的商品');
        }
    })
   var keyArr=[];
   //当页面一上来的时候，判断是否有已经存储的关键字
   if(localStorage.getItem('keyArr')){
    keyArr=JSON.parse(localStorage.getItem('keyArr'));
    var html=template('historyTpl',{result:keyArr})
    $('#history-box').html(html);
}
$("#clearBtn").on('click',function(){
    $('#history-box').html("");
    localStorage.removeItem("keyArr");
})
})