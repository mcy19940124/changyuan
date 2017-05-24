//var goodsID = request("goodsID");
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
		data:{goodsID:GetQueryString("goodsID")},
		dataType:"jsonp",
		success:function(data){
			$.each(data, function(i) {
//				console.log(data[i]);
			$original  = data[i].discount == 0 ? data[i].price : parseInt(data[i].price / 	(data[i].discount / 10));
			$div = $("<div class='content'>");
			$div.html("<div class='pic'goodsID=" + data[i].goodsID + "><img src=" + data[i].goodsListImg + "></div><div class='text'><h1>" + data[i].goodsName + "</h1><div><p>" + data[i].price + "</p><span>" + $original + "</span></div><p>尺码: 160/84A 165/88A</p><p>数量:" + data[i].classID + "</p></div>");
				$(".bigcontent").append($div);
				$(".pic").click(function(){
					window.location.href=("pic.html?goodsID=" + $(this).attr("goodsID"));
				})
			});
		}
	})
	
	
})

