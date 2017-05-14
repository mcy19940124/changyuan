
 <!DOCTYPE html>
 <html lang="en">
 <head>
 	<meta charset="UTF-8">
 	<title>Document</title>
 	<link rel="stylesheet" type="text/css" href="http://bootswatch.com/cyborg/bootstrap.min.css">
 </head>
 <body>
 <div class="container">
 	
 	<form  action="suggest2.php" method="POST">
 		<h1>腾讯视频注册</h1>
		
 		<div class="form-group">
 			<p>用户名</p>
 			<input type="text" class="form-control" name="name" onkeyup="showSuggestion(this.value)">
 		</div>

 		<div class="form-group">
 			<p>密码</p>
 			<input type="text" class="form-control" name="password1">
 		</div>

 		<div class="form-group">
 			<p>确认密码</p>
 			<input type="text" class="form-control" name="password2">
 		</div>

		<button type="submit" name="submit" class="btn btn-primary">注册</button>
		
		<h3><span id="output"></span></h3>
 	</form>
 </div>
 
 </body>
 </html>
 <!-- localhost/phpsandbox/5.12.2/5.12.2.注册.php -->

 <script type="text/javascript">
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
				xmlHttp.open("POST","suggest.php?q="+str,true);
				xmlHttp.send();
 		}
 	}
 </script>
