
 <!DOCTYPE html>
 <html lang="en">
 <head>
 	<meta charset="UTF-8">
 	<title>Document</title>
 	<link rel="stylesheet" type="text/css" href="http://bootswatch.com/cyborg/bootstrap.min.css">
 </head>
 <body>
 <div class="container">
 	
 	<form  action="suggest3.php" method="POST">
 		<h1>腾讯视频登录</h1>
		
 		<div class="form-group">
 			<p>用户名</p>
 			<input type="text" class="form-control" name="name" onkeyup="showSuggestion(this.value)">
 		</div>

 		<div class="form-group">
 			<p>密码</p>
 			<input type="text" class="form-control" name="password">
 		</div>

		<button type="submit" name="submit" class="btn btn-primary">登录</button>
		
		<a class="btn btn-default" 
					href="5.12.2.注册.php">
				注册</a>
 	</form>
 </div>
 
 </body>
 </html>
 <!-- localhost/phpsandbox/5.12.2/5.12.2.登录.php -->

 <!-- <script type="text/javascript">
 	function showSuggestion(str){
 		if (str.length == 0) {
 			document.getElementById("output").innerHTML = " ";
 		}else{
 			var xmlHttp = new XMLHttpRequest();
 			xmlHttp.onreadystatechange = function(){
					if (this.readyState==4 && this.status==200) {
						document.getElementById("output").innerHTML = this.responseText;
					}
				}
				xmlHttp.open("POST","suggest3.php?q="+str,true);
				xmlHttp.send();
 		}
 	}
 </script>
 -->