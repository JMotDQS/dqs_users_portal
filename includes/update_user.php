<?php
	include("config.php");

	$return_array = [];
	$connection = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
	//if(mysqli_connect_error()) {//Use for PHP versions prior to 5.3
	if ($connection->connect_error) {// Use for PHP versions 5.3+
		die("Connect Error (".mysqli_connect_errno().") ".mysqli_connect_error());
	} else {
        $sql = "UPDATE users
                SET approved = ".(int) $_POST['user_approved'].", activated = ".(int) $_POST['user_activated'].", role = '".$_POST['user_role']."'
				WHERE id = ".(int) $_POST['user_id'];
		$res = $connection->query($sql);
	}

	$close_success = $connection->close();
	if($close_success) {
        echo json_encode(true);
	}

?>