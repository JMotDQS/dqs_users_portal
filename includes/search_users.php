<?php
	include("config.php");

	//$_POST['search_name'] = 'nasse';

	$return_array = [];
	$connection = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
	//if(mysqli_connect_error()) {//Use for PHP versions prior to 5.3
	if ($connection->connect_error) {// Use for PHP versions 5.3+
		die("Connect Error (".mysqli_connect_errno().") ".mysqli_connect_error());
	} else {
		$sql = "SELECT id, badge, first_name, last_name, email, role, approved, activated
                FROM users
                WHERE first_name LIKE '%".$_POST['search_name']."%'
                    OR last_name LIKE '%".$_POST['search_name']."%'
                ORDER BY last_name ASC";
		$res = $connection->query($sql);
	}

	while ($obj = mysqli_fetch_object($res)) {
		array_push($return_array, $obj);
	}

	$close_success = $connection->close();
	if($close_success) {
		echo json_encode($return_array);
	}

?>