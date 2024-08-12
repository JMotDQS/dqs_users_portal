function startSearchPromise() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: "includes/search_users.php",
			type: 'POST',
			cache: false,
			dataType: 'json',
            data: {
				'search_name': dataCleanUp($('#navbar-search').val())
			},

			success: function (data) {
                //search_array = [];
				//search_array = data;
				console.log("data:", data);
				resolve(true);
			},

			error: function(xhr, desc, err) {
				reject(false);
				console.log(xhr)
				console.log("Details: " + desc + "\nError:" + err);
				console.log("startSearchPromise():Something broke");
			}
		});
	});
}

function updateRecordPromise(param_index) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: "includes/update_user.php",
			type: 'POST',
			cache: false,
			dataType: 'json',
            data: {
                'user_id': search_array[param_index]['id'],
                'user_approved': search_array[param_index]['approved'],
                'user_activated': search_array[param_index]['activated'],
			},

			success: function (data) {
				resolve(true);
			},

			error: function(xhr, desc, err) {
				reject(false);
				console.log(xhr)
				console.log("Details: " + desc + "\nError:" + err);
				console.log("updateRecordPromise():Something broke");
			}
		});
	});
}