<?php 


	#测试submit是否可用
if (filter_has_var(INPUT_POST, "submit")) {
	// echo"keyi";
	$name = htmlentities($_POST['name']);
	$password = htmlentities($_POST['password']);
	$mysqli = new mysqli("localhost","root","","accunt");
	 $query = "SELECT * FROM form ";
	 $pwd="SELECT password from form where name='{$name}'";
	 // print_r($pwd);

	 $mysqli->query("set names utf8");
	 $result = $mysqli->query($query);
	 $row = $result->fetch_row();
	 // print_r($row[2]);
	 
	// var_dump($row[0]);
	if($row[2]==$password && !empty($password)){
		echo "登陆成功";
	}else{
		echo "登录失败";
	}
}else{
	echo "fuck";
}
 ?>