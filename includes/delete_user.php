<?php
	include("config.php");

	$connection = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
	//if(mysqli_connect_error()) {//Use for PHP versions prior to 5.3
	if ($connection->connect_error) {// Use for PHP versions 5.3+
		die("Connect Error (".mysqli_connect_errno().") ".mysqli_connect_error());
	} else {
		$sql = "DELETE FROM users
                WHERE id = ".$_POST['id'];
		$res = $connection->query($sql);
	}

	$close_success = $connection->close();
	if($close_success) {
		echo json_encode(true);
	}
?>