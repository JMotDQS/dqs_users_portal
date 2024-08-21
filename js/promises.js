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
				console.log(data);
				search_array = [];
				search_array = data;
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
                'user_role': search_array[param_index]['role'],
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

function addUserPromise() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: "includes/add_user.php",
			type: 'POST',
			cache: false,
			dataType: 'json',
            data: {
                'first_name': dataCleanUp($('#first_name').val()),
                'last_name': dataCleanUp($('#last_name').val()),
                'role': $('#role').val(),
			},

			success: function (data) {
				new_user_array = [];
				new_user_array = data;
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

function generateBadgePromise(param_id) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: "includes/generate_badge.php",
			type: 'POST',
			cache: false,
			dataType: 'json',
            data: {
                'id': param_id
			},

			success: function (data) {
				/*new_user_array = [];
				new_user_array = data;*/
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