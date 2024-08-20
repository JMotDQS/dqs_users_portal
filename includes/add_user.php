<?php
	include("config.php");

	$return_array = [];
	$badge_array = [];
	$temp_badge_num;
	$temp_badge_num_new;
	$new_badge_num = '';
	$connection = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
	//if(mysqli_connect_error()) {//Use for PHP versions prior to 5.3
	if ($connection->connect_error) {// Use for PHP versions 5.3+
		die("Connect Error (".mysqli_connect_errno().") ".mysqli_connect_error());
	} else {
		$sql_badge = "SELECT badge
					FROM users
					WHERE badge LIKE 'DQS1%'
					ORDER BY badge DESC
					LIMIT 1";
		$res = $connection->query($sql_badge);
		while ($obj = mysqli_fetch_object($res)) {
			array_push($badge_array, $obj);
		}

		$temp_badge_num = (int)substr($badge_array[0]->badge, 3);
		$temp_badge_num_new = $temp_badge_num + 1;
		$new_badge_num = 'DQS'.$temp_badge_num_new;

		$sql = "INSERT INTO users
					(badge, user_type, first_name, last_name, role, approved, activated, create_date)
				VALUES ('".$new_badge_num."', 'Employee', '".$_POST['first_name']."', '".$_POST['last_name']."', '".$_POST['role']."', 1, 1, NOW())";
		$res = $connection->query($sql);
		$new_record_id = (int)$connection->insert_id;

		$sql = "SELECT *
					FROM users
					WHERE id = ".$new_record_id;
		$res = $connection->query($sql);
		while ($obj = mysqli_fetch_object($res)) {
			array_push($return_array, $obj);
		}
	}

	$close_success = $connection->close();
	if($close_success) {
		echo json_encode($return_array);
	}
?>