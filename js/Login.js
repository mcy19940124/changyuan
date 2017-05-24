	
	$("#show").on("click",function(){
				if($("#show").is(":checked")){
					$("#password").attr("type","text");
				}else{
					$("#password").attr("type","password");
				}
			})

var button = document.getElementById('button');
button.onclick = function () {
	var user = document.getElementById("user").value;
	var password = document.getElementById("password").value;

	$.ajax({
		type:"GET",
		url:"http://datainfo.duapp.com/shopdata/userinfo.php",
		data:{status:"login",userID:user,password:password},
		dataType:"json",
		success:function(data){

			if(user == "" || password == ""){
				alert("输入列表不能为空");
			}else{
				if (data == 0) {
					alert("用户名不存在");
				}else if(data == 2){
					$("#hidden").css("opacity",1);
				}else{
					alert("登陆成功");
				}
				
			}		
		}
	})
}

	


