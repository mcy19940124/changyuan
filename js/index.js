var mySwiper = new Swiper('.swiper-container',{
autoplay : 2500,
speed:300,
pagination : '.swiper-pagination',
paginationClickable :true,
})

$(function(){
	$.ajax({
			type:"GET",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			dataType:"jsonp",
			success:function(data){
			  $.each(data,function(i){
			  	console.log(data[i]);
			  	var $ul = $("<ul>");
			  	$original  = data[i].discount == 0 ? data[i].price : parseInt(data[i].price / (data[i].discount / 10));	
			  	$ul.html("<li class='button' goodsID=" + data[i].goodsID + "><a class='master'><img src='"+data[i].goodsListImg+"'></a><p>" + data[i].goodsName + "</p><div class='cost'><span class='span1'>" + data[i].price + "</span><p class='p1'>" + $original + "</p><p class='p2'>" + data[i].discount + "折</p></div><div class='contentCart'><a class='cartClick'><img class='cart' src='img/bg_car.png'></a></div></li>");
			  	$(".goodsList").append($ul);
			  	$(".button").on("click",function(){
					window.location.href=("details.html?goodsID=" + $(this).attr("goodsID"));
					
				});
			  }); 		
			}
			
	})
	
	
})

