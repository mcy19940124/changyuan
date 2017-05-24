	var button = document.getElementById("button");
	button.onclick = function(){
		var user = document.getElementById("user").value;
		var password1 = document.getElementById("password1").value;
		var password2 = document.getElementById("password2").value;
		if($("#check").is(":checked")){
					$.ajax({
			type:"GET",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{status:"register",userID:user,password:password1},
			dataType:"json",
			success:function(data){
				if (user == "" || password1 == "" || password2 == "") {
							alert("请完整填写信息");
				}else{
					if (password1 !== password2) {
						alert("两次密码输入不一致");
					}else{
						if(data == 0) {
							$("#hidden").css("opacity",1);
						}else if(data == 1){
							alert("注册成功");
							window.location = "index.html";	
						}
					}		
				}
			}
		})
	}else{
		$("#read").css("opacity",1);
	}
}
