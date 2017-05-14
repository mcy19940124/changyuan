<?php 
	# 连接数据库
	$conn = mysqli_connect("localhost","root","","accunt");

	if (mysqli_connect_errno()) {
		echo "数据库连接失败 ".mysqli_connect_errno();
	}
	# 获取数据库中的内容
	$query = "SELECT * FROM form ";
	#执行sql语句
	$result = mysqli_query($conn,$query);
	


	#测试submit是否可用
if (filter_has_var(INPUT_POST, "submit")) {
	 // echo "hello world";
	$name = htmlentities($_POST['name']);
	$password1 = htmlentities($_POST['password1']);
	$password2 = htmlentities($_POST['password2']);
	if (!empty($name)&&!empty($password1)&&!empty($password2)) {
		if ($password1 == $password2){
			$sql = "INSERT INTO form(name,password)VALUES('$name','$password1')";
 			$result1 = $conn->query($sql);
 			if ($result1) {
 				 echo "插入成功";

 			}else{
 			 	echo "插入失败";
 			}
		}
	}
}else{
	echo "fuck";
}
 ?>
