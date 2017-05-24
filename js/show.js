/*获取URL参数方法*/
function GetQueryString(name){
	/*定义正则，用于获取相应参数*/
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	 /*字符串截取，获取匹配参数值*/
     var r = window.location.search.substr(1).match(reg);
	 /*但会参数值*/
     if(r!=null)return  decodeURI(r[2]); return null;
}
$(function(){
	$.ajax({
		type:"GET",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		dataType:"jsonp",
		data:{classID:GetQueryString("classID")},
		success:function(data){
			$.each(data, function(i) {
				console.log(data[i]);
				$li = $("<li class='commodity'>");
				$li.html("<a class='pic'><img src=" + data[i].goodsListImg + "></a><p>" + data[i].goodsName + "</p><span>" + data[i].price + "</span>");
				$("ul").append($li);
			});
		}
	});
})
