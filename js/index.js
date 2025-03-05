const myModal = document.querySelector('.modal');
var chosen_user_id = 0;

$(document).ready(function() {
	$('app').html('Please Start Search');
});

/*******
 if(!$('#dnr').is(':checked')) {
    console.log("DNR");
} else {
    console.log("Can Work");
}

$('#dnr').is(':checked')
Returns true/false based on if a checkbox is checked or not.
*******/
function toggleSet(param_id) {
	if($('#dnr_' + param_id).is(':checked')) {
		$('#active-label_' + param_id).addClass('user-inactive');
		$('#active-label_' + param_id).html('Inactive');
	} else {
		$('#active-label_' + param_id).removeClass('user-inactive');
		$('#active-label_' + param_id).html('Active');
	}
}

function toggleClicked(e) {
	e.preventDefault;
	my_id = parseInt(e.slice( (e.indexOf('_') + 1) ));
	if($('#dnr_' + my_id).is(':checked')) {
		$('#active-label_' + my_id).addClass('user-inactive');
		$('#active-label_' + my_id).html('Inactive');
		testFindIndex(my_id, false);
	} else {
		$('#active-label_' + my_id).removeClass('user-inactive');
		$('#active-label_' + my_id).html('Active');
		testFindIndex(my_id, true);
	}
}

function updateRole(e) {
	e.preventDefault;
	my_id = parseInt(e.slice( (e.indexOf('_') + 1) ));
	var index = search_array.findIndex(p => p.id == my_id);
	search_array[index]['role'] = $('#roles_' + my_id).val();
	updateRecord(index);
}

function testFindIndex(param_id, param_flag) {
	var index = search_array.findIndex(p => p.id == param_id);
	if(param_flag) {
		search_array[index]['approved'] = 1;
		search_array[index]['activated'] = 1;
	} else {
		search_array[index]['approved'] = 0;
		search_array[index]['activated'] = 0;
	}
	updateRecord(index);
}

function startSearch() {
	var temp_html = `<progress></progress>`;
	$('.search-results').html(temp_html);
	$('app').html('Searching...');
	startSearchPromise().then(function(resolve) {
		setSearchResults();
	}).catch(function(reject) {
		//console.log("Search Loaded!");
	}).finally(function() {
		//console.log("Fresh Search.");
	});
}

function clearSearch() {
	$('app').html('Please Start Search');
	$('.search-results').html('');
	$('#navbar-search').val('');
	$('#navbar-search').focus();
}

function updateRecord(param_index) {
	updateRecordPromise(param_index).then(function(resolve) {
		startSearch();
	}).catch(function(reject) {
		//console.log("Search Loaded!");
	}).finally(function() {
		//console.log("Fresh Search.");
	});
}

function setSearchResults() {
	temp_html = '';
	resultsLength = search_array.length;
	if(resultsLength < 1) {
		$('app').html('No results found.');
		$('.search-results').html('');
	} else {
		$('app').html(resultsLength + ' result(s) found.');

		for(i = 0; i <  resultsLength; i++) {
			temp_html += `<div class="card" data-id='${search_array[i]['id']}'>`;
				temp_html += `<div class="card-grid card-titles">`;
						temp_html += `<div>Last, First Name</div>`;
						temp_html += `<div>Email</div>`;
						temp_html += `<div>Badge</div>`;
						temp_html += `<div>Role</div>`;
						temp_html += `<div class="active-label" id="active-label_${search_array[i]['id']}">Deactivate</div>`;
						temp_html += `<div>Print QR</div>`;
				temp_html += `</div>`;
				temp_html += `<div class="card-grid card-data">`;
					temp_html += `<div>${search_array[i]['last_name']}, ${search_array[i]['first_name']}</div>`;
					temp_html += `<div>${search_array[i]['email']}</div>`;

					if(search_array[i]['badge'] == '' || search_array[i]['badge'] == null) {
						search_array[i]['badge'] = null;
						temp_html += `<div class="modal-create" id="new-badge-id_${search_array[i]['id']}" onclick="generateNewBadge(this)">`;
							temp_html += `<i class="fas fa-plus-square"></i>`;
						temp_html += `</div>`;
					} else {
						temp_html += `<div>${search_array[i]['badge']}</div>`;
					}

					temp_html += `<div>`;
						temp_html += `<select name="roles_${search_array[i]['id']}" id="roles_${search_array[i]['id']}" onchange="updateRole(this.id)">`;
							temp_html += `<option value="Driveaway">Driveaway</option>`;
							temp_html += `<option value="Keymaster">Keymaster</option>`;
							temp_html += `<option value="Security Guard">Security Guard</option>`;
							temp_html += `<option value="Security Supervisor">Security Supervisor</option>`;
							//temp_html += `<option value="Recruiter">Recruiter</option>`;
							//temp_html += `<option value="HR">HR</option>`;

							if(search_array[i]['role'] == 'Admin') {
								temp_html += `<option value="Admin">Admin</option>`;
							} else {
								temp_html += `<option value="Admin" disabled="disabled">Admin</option>`;
							}
							
							
						temp_html += `</select>`;
					temp_html += `</div>`;

					temp_html += `<div>`;
						temp_html += `<label class="switch">`;
							temp_html += `<input type="checkbox" id="dnr_${search_array[i]['id']}" name="dnr_${search_array[i]['id']}" onClick="toggleClicked(this.id)">`;
							temp_html += `<span class="slider round"></span>`;
						temp_html += `</label>`;
					temp_html += `</div>`;

					temp_html += `<div class="modal-print" id="user-print_${search_array[i]['id']}" onclick="printUser(this)">`;
						temp_html += `<i class="fas fa-print"></i>`;
					temp_html += `</div>`;

				temp_html += `</div>`;
			temp_html += `</div>`;
		}

	/*
		<div class="modal-edit">
			<i class="fas fa-edit"></i>
		</div>
		<div class="modal-delete">
			<i class="fas fa-trash-alt"></i>
		</div>
		<div class="modal-create">
			<i class="fas fa-square-plus"></i>
		</div>
	*/

		$('.search-results').html(temp_html);

		for(i = 0; i <  resultsLength; i++) {
			if(parseInt(search_array[i]['approved']) == 1 && parseInt(search_array[i]['activated']) == 1) {
				$('#dnr_' + search_array[i]['id']).prop( "checked", false );
			} else {
				$('#dnr_' + search_array[i]['id']).prop( "checked", true );
			}

			toggleSet(search_array[i]['id']);

			$('#roles_' + search_array[i]['id']).val(`${search_array[i]['role']}`);
		}
	}
}

function dataCleanUp(param_string) {
	var temp_string = param_string.trim().replace(/&/g, "&amp;");
	var temp_len = g_SEARCH_ENTITIES.length;
	for(i = 0; i < temp_len; i++) {
		temp_string = temp_string.replace(new RegExp(g_SEARCH_ENTITIES[i], 'g'), g_REPLACE_ENTITIES[i]);
	}
	return temp_string;
}
function reverseEntities(param_string) {
	var temp_string;
	if(typeof param_string == "string") {
		temp_string = param_string.trim().replace(/&amp;/g, "&");
		var temp_len = g_SEARCH_ENTITIES.length;
		for(i = 0; i < temp_len; i++) {
			temp_string = temp_string.replace(new RegExp(g_REPLACE_ENTITIES[i], 'g'), g_SEARCH_ENTITIES[i]);
		}
		return temp_string;
	}
}

function generateRandomString(param_seed = 5) {
	/* 65 is the ASCII code for a capital 'A'. This goes through to 90 which is a capital 'Z' */
	var asciiCodeStart = 65;
	String.fromCharCode(asciiCodeStart + Math.floor(Math.random() * 26))
	return String.fromCharCode(asciiCodeStart + Math.floor(Math.random() * 26)) + "-" + Math.random().toString(36).substring(2, param_seed).toUpperCase();
}

function setKeyEvents(param_page, param_element, param_multiplier = 1) {
	$('#' + param_element).on('keypress', {page: param_page, inputEl: param_element, timerMultiplier: param_multiplier}, keyPressEvent);
	$('#' + param_element).on('keyup', {page: param_page, inputEl: param_element, timerMultiplier: param_multiplier}, keyUpEvent);
}

function clearTimer(param_timer) {
	window.clearTimeout(param_timer); // prevent errant multiple timeouts from being generated
}

function printUser(ele) {
	chosen_user_id = parseInt(ele.id.substr( ( parseInt(ele.id.indexOf('_') + 1) ) ));
	//console.log(chosen_user_id);
	//console.log(ele);
	//console.log($(`[data-id=${chosen_user_id}]`));
	const selected_index = search_array.findIndex(item => item.id == chosen_user_id);
	console.log("selected_index:", selected_index);
	console.log("First Name:", search_array[selected_index].first_name);
	console.log("Last Name:", search_array[selected_index].last_name);
	console.log("Role:", search_array[selected_index].role);
	console.log("Badge:", search_array[selected_index].badge);
	console.log("------------------------------------------------");
}

/*function confirmDeleteUser() {
	deleteUserPromise(chosen_user_id).then(function(resolve) {
		warningModal.close()
		startSearch();
	}).catch(function(reject) {
		//console.log("Search Loaded!");
	}).finally(function() {
		//console.log("Fresh Search.");
	});
}*/