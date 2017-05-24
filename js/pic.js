
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
		data:{goodsID:GetQueryString("goodsID")},
		dataType:"jsonp",
		success:function(data){
			$.each(data,function(i){
				
				var url = data[i].goodsBenUrl;
				console.log(url);
				
				$div = $("<div class='content'>");
				$div.html("<img src=" + data[i].imgsUrl + " /><p>" + data[i].detail + "</p>");
				$(".bigcontent").append($div);
			})
		}
	});
})
