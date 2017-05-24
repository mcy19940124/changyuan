$(function(){
	$.ajax({
	type:"GET",
	url:"http://datainfo.duapp.com/shopdata/getclass.php",
	dataType:"json",
	success:function(data){
//		console.log(data);
		$.each(data, function(i) {
			console.log(data[i]);
			var $ul = $("<ul>");
			$ul.html("<li class='classify' classID=" + data[i].classID + " ><span>" + data[i].className + "</span><p>></p></li>");
			$(".text").append($ul);
				$(".classify").on("click",function(){
					window.location.href=("show.html?classID=" + $(this).attr("classID"));
				})
			});
		}
	})
})

