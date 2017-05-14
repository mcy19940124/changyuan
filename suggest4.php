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
	#与数据库进行匹配
	$post = mysqli_fetch_all($result,MYSQLI_ASSOC);

	

 ?>