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

	<!-- Google Fonts -->
	<!-- <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700" rel="stylesheet"> -->

	</head>

	<body id="home">
	<nav>
		<h3>DQS users Admin</h3>
		<div id="navbar-search-group">
			<label for="navbar-search">User Search:</label>
			<input type=text id="navbar-search" name="navbar-search" />
		</div>
		<div class="menu-items">
			<li>
				<a class="navbar-link" data-page="inventory">Inventory</a>
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
		<app></app>
		<div class="search-results">
			<!--<div class="card" data-id='1'>
				<div class="card-grid card-titles">
					<div>Last, First Name</div>
					<div>Email</div>
					<div>Badge</div>
					<div id="active-label"></div>
				</div>
				<div class="card-grid card-data">
					<div>
						Song, River
					</div>
					<div>
						rsong@dwho.com
					</div>
					<div>
						DQS99999
					</div>
					<div>
						<label class="switch">
							<input type="checkbox" id="dnr" name="dnr">
							<span class="slider round"></span>
						</label>
					</div>
				</div>
			</div>-->
		</div>
	</main>


	<!-- Modal -->
	<div id="myModal" class="modal" role="dialog">
	</div>
	<!-- Modal -->

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
	</body>
</html>