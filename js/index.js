$(document).ready(function() {
	$('app').html('Please Start Search');
	setSearchResults();
});

const searchResults = [
	{
		'id':702,
		'firstName':'River',
		'lastName':'Song',
		'email':'rsong@dwho.com',
		'badge':'DQS99998',
		'approved':1,
		'activated':1
	},
	{
		'id':703,
		'firstName':'Amy',
		'lastName':'Pond',
		'email':'apond@dwho.com',
		'badge':'DQS99997',
		'approved':0,
		'activated':0
	},
	{
		'id':704,
		'firstName':'Clara',
		'lastName':'Oswald',
		'email':'coswald@dwho.com',
		'badge':'DQS99996',
		'approved':1,
		'activated':0
	},
	{
		'id':705,
		'firstName':'Rory',
		'lastName':'Williams',
		'email':'rwilliams@dwho.com',
		'badge':'DQS99995',
		'approved':0,
		'activated':1
	}
];

/*******
 if(!$('#dnr').is(':checked')) {
    console.log("DNR");
} else {
    console.log("Can Work");
}

$('#dnr').is(':checked')
Returns true/false based on if a checkbox is checked or not.
*******/
function dnrToggleTest(e) {
	e.preventDefault;
	my_id = parseInt(e.slice( (e.indexOf('_') + 1) ));
	if($('#' + e).is(':checked')) {
		$('#active-label_' + my_id).addClass('user-deactivated');
		$('#active-label_' + my_id).html('Deactivated');
		testFindIndex(my_id, false);
	} else {
		$('#active-label_' + my_id).removeClass('user-deactivated');
		$('#active-label_' + my_id).html('Deactivate');
		testFindIndex(my_id, true);
	}
}

function testFindIndex(param_id, param_flag) {
	var index = searchResults.findIndex(p => p.id == param_id);
	if(param_flag) {
		searchResults[index].approved = 1;
		searchResults[index].activated = 1;
	} else {
		searchResults[index].approved = 0;
		searchResults[index].activated = 0;
	}
}

function setSearchResults() {
	temp_html = '';
	resultsLength = searchResults.length;

	for(i = 0; i <  resultsLength; i++) {
		temp_html += `<div class="card" data-id='${searchResults[i]['id']}'>`;
			temp_html += `<div class="card-grid card-titles">`;
					temp_html += `<div>Last, First Name</div>`;
					temp_html += `<div>Email</div>`;
					temp_html += `<div>Badge</div>`;
					temp_html += `<div class="active-label" id="active-label_${searchResults[i]['id']}">Deactivate</div>`;
			temp_html += `</div>`;
			temp_html += `<div class="card-grid card-data">`;
				temp_html += `<div>${searchResults[i]['lastName']}, ${searchResults[i]['firstName']}</div>`;
				temp_html += `<div>${searchResults[i]['email']}</div>`;
				temp_html += `<div>${searchResults[i]['badge']}</div>`;
				temp_html += `<div>`;
					temp_html += `<label class="switch">`;
						temp_html += `<input type="checkbox" id="dnr_${searchResults[i]['id']}" name="dnr_${searchResults[i]['id']}" onClick="dnrToggleTest(this.id)">`;
						temp_html += `<span class="slider round"></span>`;
					temp_html += `</label>`;
				temp_html += `</div>`;
			temp_html += `</div>`;
		temp_html += `</div>`;
	}
	$('.search-results').html(temp_html);

	for(i = 0; i <  resultsLength; i++) {
		if(parseInt(searchResults[i]['approved']) == 1 && parseInt(searchResults[i]['activated']) == 1) {
			$('#dnr_' + searchResults[i]['id']).prop( "checked", false );
		} else {
			$('#dnr_' + searchResults[i]['id']).prop( "checked", true );
		}

		dnrToggleTest('dnr_' + searchResults[i]['id']);
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