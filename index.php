<!doctype html>

<html>
	<head>
	<meta charset="utf-8"/>	
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
	<!-- Angular will break without this line. It is not needed for Chrome -->
	<meta http-equiv="X-UA-Compatible" content="IE=11" />

	<title>DQS Users Admin</title>

	<!-- Custom CSS -->
	<link rel="stylesheet" href="css/custom.css">
	<link rel="stylesheet" href="css/navbar.css">
	<link rel="stylesheet" href="css/results.css">
	<link rel="stylesheet" href="css/modal.css">

	<!-- Google Fonts -->
	<!-- <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700" rel="stylesheet"> -->

	</head>

	<body id="home">
	<nav>
		<h3>DQS users Admin</h3>
		<div id="navbar-search-group">
			<label for="navbar-search">User Search:</label>
			<input type=text id="navbar-search" name="navbar-search" />
			<button class="button" onClick="startSearch()">Search</button>
		</div>
		<div class="menu-items">
			<li>
				<a class="navbar-link" data-page="add_user" data-new-user onclick="openModal()">Add User</a>
			</li>
			<li>
				<a class="navbar-link" data-page="sets">Sets</a>
			</li>
			<li>
				<a class="navbar-link" data-page="minifigure_packs">Minifigures</a>
			</li>
			<li>
				<a class="navbar-link" data-page="designIds">Design ID&apos;s</a>
			</li>
			<li>
				<a class="navbar-link" data-page="colors">Colors</a>
			</li>
			<li>
				<a class="navbar-link" data-page="stats">Stats</a>
			</li>
		</div>
	</nav>

	<main>
		<app class="app" id="app"></app>
		<div class="search-results">&nbsp;</div>
	</main>


	<!-- Modal -->
	<dialog class="modal" id="addModal">
		<header class="modal-header">
			<div id="title">
				<h3>Add User</h3>
				<p>all fields required</p>
			</div>
			<div class="modal-save invisible" onclick="addUser()">
				<i class="far fa-save"></i>
			</div>
			<div class="modal-close" onclick="closeModal()">
				<i class="far fa-window-close"></i>
			</div>
		</header>
		<div class="modal-grid">
			<div class="modal-form-element">
				<!--<label for="first_name">First Name:</label>-->
				<input type="text" id="first_name" name="first_name" placeholder="First Name">
			</div>
			<div class="modal-form-element">
				<!--<label for="last_name">Last Name:</label>-->
				<input type="text" id="last_name" name="last_name" placeholder="Last Name">
			</div>
			<div class="modal-form-element">
				<!--<label for="role" style="display:block;">Role:</label>-->
				<select name="role" id="role">
					<option selected="true" disabled="disabled" value="">Please Choose Role</option>	
					<option value="Security Guard">Security Guard</option>
					<option value="Security Supervisor">Security Supervisor</option>
					<option value="Admin" disabled="disabled">Admin</option>
					<option value="Driveaway">Driveaway</option>
				</select>
			</div>
		</div>
	</dialog>
	<!-- Modal -->

	<!-- Warning Modal -->
	<dialog class="modal" id="warningModal">
		<header>
			<div id="title">
				<h1>WARNING!</h1>
			</div>
		</header>
		<div id="warning-body">
			<p>You are about to permanantly delete this user.</p>
			<p>This action can not be undone!</p>
		</div>
		<div class="warning-modal-footer">
			<button class="warning-modal-button" id="warning-modal-cancel" onclick="warningModal.close()">Cancel</button>
			<button class="warning-modal-button warning-modal-button-delete" id="warning-modal-delete" onclick="confirmDeleteUser()">Delete</button>
		</div>
	</dialog>
	<!-- Warning Modal -->

	<!-- Help -->
	<div id="help-window" class="help-window">
	</div>
	<!-- Help -->

	<!-- JQuery CDN -->
	<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

	<!-- Latest compiled Font Awesome JavaScript -->
	<script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script>

	<!-- Custom JavaScript -->
	<script src="js/index.js"></script>
	<script src="js/custom.js"></script>
	<script src="js/modal.js"></script>
	<script src="js/promises.js"></script>
	</body>
</html>