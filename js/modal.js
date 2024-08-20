var flag_array = [];

function openModal() {
	resetModalForm()
	$('#first_name').keyup( () => {
		console.log($('#first_name').val());
		if ($('#first_name').val().length > 0) {
			flag_array['first'] = true;
		} else {
			flag_array['first'] = false;
		}

		checkInput();
	});

	$('#last_name').keyup( () => {
		console.log($('#last_name').val());
		if ($('#last_name').val().length > 0) {
			flag_array['last'] = true;
		} else {
			flag_array['last'] = false;
		}

		checkInput();
	});

	$('#role').change( () => {
		console.log($('#role').val());
		if ($('#role').val() == null) {
			flag_array['role'] = false;
		} else {
			flag_array['role'] = true;
		}

		checkInput();
	});

	myModal.showModal();
}

function closeModal() {
	myModal.close();
	resetModalForm()
}

function addUser() {
	//myModal.close();
}

function checkInput() {
	$('.modal-save').addClass('invisible');

	if(flag_array['first'] && flag_array['last'] && flag_array['role']) {
		$('.modal-save').removeClass('invisible');
	}
}

function resetModalForm() {
	flag_array['first'] = false;
	flag_array['last'] = false;
	flag_array['role'] = false;

	$('#first_name').off('keyup');
	$('#last_name').off('keyup');
	$('#role').off('change');

	$('#first_name').val('');
	$('#last_name').val('');
	$('#role').val('');

	checkInput();
}