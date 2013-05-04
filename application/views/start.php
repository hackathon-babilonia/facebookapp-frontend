<!DOCTYPE HTML>

<html>

	<head>

		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

		<!--Google Fonts-->
		<link href='//fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic' rel='stylesheet' type='text/css'>

		<!-- *************************************************************************
		**************************   STYLE SHEET   *******************************
		************************************************************************** -->

		<link href="css/main.css" rel="stylesheet" type="text/css" />
		<link href="css/filters.css" rel="stylesheet" type="text/css" />
		<link href="css/room.css" rel="stylesheet" type="text/css" />
		<link href="css/jquery.fancybox.css" rel="stylesheet" type="text/css" />
		
		<link href="css/cupertino/jquery-ui-1.10.3.custom.css" rel="stylesheet">
		<script src="js/jquery-1.9.1.js"></script>
		

		<!--[if IE 7 ]>    <html class= "ie7"> <![endif]-->
		<!--[if IE 8 ]>    <html class= "ie8"> <![endif]-->
		<!--[if IE 9 ]>    <html class= "ie9"> <![endif]-->

		<!--[if lt IE 9]>
		<script>
		document.createElement('header');
		document.createElement('nav');
		document.createElement('section');
		document.createElement('article');
		document.createElement('aside');
		document.createElement('footer');
		</script>
		<![endif]-->

		<title>Homin' Universitario</title>

		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

		<!-- *************************************************************************
		*****************                FAVICON               ********************
		************************************************************************** -->

		<link rel="shortcut icon" href="img/favicon.png" />

		<!--[if lt IE 9]>
		<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

		<!-- *************************************************************************
		**************************        JS       *******************************
		************************************************************************** -->

		<!-- Google Hosted APIS -->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>

		<!-- Custom APIS -->
		<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
		<script type="text/javascript" src="js/hoverIntent.js"></script>
		<script type="text/javascript" src="js/retina.js"></script>
		<script type="text/javascript" src="js/custom.js"></script>

		<!-- Google Maps API -->
		<script type="text/javascript"src="//maps.googleapis.com/maps/api/js?key=AIzaSyBYC0xHh-kygIfu9UWJlY9pEqtFCB4oqu0&sensor=false"></script>

		<!-- *************************************************************************
		******************     THESE ARE THE SCRIPT CALLS    ***********************
		************************************************************************** -->
		<script type="text/javascript">
			jQuery(window).load(function()
			{
				// Create the dropdown base
				jQuery("<select />").appendTo(".topmenu");

				// Create default option "Go to..."
				jQuery("<option />",
				{
					"selected" : "selected",
					"value" : "",
					"text" : "Menu"
				}).appendTo(".topmenu select");

				// Populate dropdown with menu items
				jQuery(".topmenu a").each(function()
				{
					var el = jQuery(this);
					jQuery("<option />",
					{
						"value" : el.attr("href"),
						"text" : el.text()
					}).appendTo(".topmenu select");
				});

				// To make dropdown actually work
				// To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
				jQuery(".topmenu select").change(function()
				{
					window.location = jQuery(this).find("option:selected").val();
				});

			});

		</script>

	</head>

	<body>

		<!-- Start of header wrapper -->
		<div id="header_wrapper">

			<!-- Start of content wrapper -->
			<div class="content_wrapper">

				<div id="top-content">
					<!-- Start of logo -->
					<div id="logo">
						<a href="#"><img src="/img/logo_transp.png" height="100"  style="margin-botom: -10px; margin-left: 15px" alt="Homin Universitário" /></a>

					</div><!-- End of logo -->

					<!-- Start of top menu wrapper -->
					<div class="topmenuwrapper" style="display: none;">

						<!-- Start of topmenu -->
						<nav class="topmenu">

							<ul class="sf-menu">

								<li>
									<a href="javascript:void(0);" data-action="filter-form">Get a Room</a>
								</li>

								<li>
									<a href="javascript:void(0);" data-action="new-room">Publish a Room</a>
								</li>

								<li>
									<a href="javascript:void(0);">Account</a>
								</li>

								<li>
									<a href="http://facebook.com">Logout</a>
								</li>

							</ul>

						</nav><!-- End of topmenu -->

						<!-- Start of header phone -->
						<div class="header_school">
							UNICAMP <a href="javascript:;" style="color: #badcea;; text-transform: none">(Other)</a>
						</div><!-- End of header phone -->

						<!-- Clear Fix --><div class="clear"></div>

					</div><!-- End of top menu wrapper -->
				</div>

				<!-- Start of slider wrapper -->
				<section id="main-content">

					<div id="landing">
						<div id="landing-title">
							The best way to get a room!
						</div>
						<div id="landing-subtitle">
							Check were your friends are living and choose your own place!
						</div>
						<br />
						<br />
						<img src="img/image_header.png" width="300px" alt="Image Header">
					</div>
					
					<div id="search-filters" style="display: none" data-action="search-filters">
						
						<span class="filter-title">Filter your search</span>
						
						<div class="filter-row">
							<span class="filter-row-title">Home Type</span>
							<div class="filter-radio-group">
							    <input type="radio" name="moradia" value="0" checked> Fraternity
								<br><input type="radio" name="moradia" value="1"> Flat
								<br><input type="radio" name="moradia" value="2"> Boarding House
  							</div>
						</div>
						
						<div class="filter-row">
							<span class="filter-row-title">Room Type</span>
							<div class="filter-radio-group">
							    <input type="radio" name="tipo" value="f"> Female
								<br><input type="radio" name="tipo" value="mf"> Both
								<br><input type="radio" name="tipo" value="m" checked> Male
  							</div>
						</div>
						
						<div class="filter-row">
							<span class="filter-row-title">Price Range:</span> 
							<br /><span id="price-amount">R$300 - R$800</span>							
							<div id="price-range"></div>
						</div>
						
						<div class="filter-row" style="margin-top: 7px">
							<span class="filter-row-title">Time (min)</span>
							<div class="filter-radio-group" style="margin-bottom: 7px;">
							    <input type="radio" name="distance" value="0"> By Foot
								<br><input type="radio" name="distance" value="1"> Bike
								<br><input type="radio" name="distance" value="2" checked> Car
								<br><input type="radio" name="distance" value="3"> Bus
  							</div>
  							<input id="distance-spinner" name="distance" /> minutes
						</div>
					
					</div>
					
					<div id="new-room" style="display: none" data-action="new-room">
					
						<span class="filter-title">New room</span>

						<div class="filter-row">
							<span class="filter-row-title">Name</span>
							<input type="text" id="nome" style="width: 230px"/>
						</div>
						
						<div class="filter-row">
							<span class="filter-row-title">Description</span>
							<textarea id="desc" cols="10">
							</textarea>
						</div>
						
						<div class="filter-row">
							<span class="filter-row-title">Address</span>
							<input type="text" id="endereco" style="width: 230px"/>
						</div>
						
						<div class="filter-row">
							<span class="filter-row-title">Number</span>
							<input type="text" id="numero" style="width: 230px"/>
						</div>
						
						<div class="filter-row">
							<span class="filter-row-title">Name</span>
							<input type="text" id="nome" style="width: 230px"/>
						</div>
						
						<div class="filter-row">
							<span class="filter-row-title">Neighboorhood</span>
							<input type="text" id="bairro" style="width: 230px"/>
						</div>
						
						<div class="filter-row">
							<span class="filter-row-title">City</span>
							<br /><input type="text" id="nome" style="width: 150px;"/> - <input type="text" id="estado" style="width: 50px; text-transform: uppercase;" maxlength="2"/> 
						</div>
						
						<div class="filter-row">
							<span class="filter-row-title">Room Type</span>
							<br /><input type="radio" name="sexo" value="m" /> Male
							<br /><input type="radio" name="sexo" value="m" /> Both
							<br /><input type="radio" name="sexo" value="m" /> Female
						</div>
						
						<div class="filter-row">
							<span class="filter-row-title">Home Type</span>
							<br /><input type="radio" name="sexo" value="m" /> Fraternity
							<br /><input type="radio" name="sexo" value="m" /> Boarding House
							<br /><input type="radio" name="sexo" value="m" /> Flat
						</div>
						
						<div class="filter-row">
							<span class="filter-row-title">Monthly Price</span>
							<br /> R$ <input id="price-spinner" name="price" style="width: 100px"/> ,00 
						</div>
						
						<input type="hidden" id="latitude" />
						<input type="hidden" id="longitude" />
						
						<div class="filter-row" style="width: 100%; text-align: center">
							<br /><br /><input type="submit" onclick="cadastrarVaga()" value="Create">
						</div>

					</div>

					<div id="map" style="display: none"></div>

					<!-- Start of clear fix --><div class="clear"></div>

				</section><!-- End of slider wrapper -->

			</div><!-- End of content wrapper -->

			<!-- Clear Fix --><div class="clear"></div>

		</div><!-- End of header wrapper -->

		<!-- Start of message wrapper -->
		<div id="message_wrapper">

			<!-- Start of content wrapper -->
			<div class="content_wrapper">

				<!-- Start of contentleft -->
				<div class="contentleft">
					<img class="loading-img" data-action="loading-img" src="/img/loading.gif" style="display: none">
					<p data-action="status-msg">
						Sign up now to get your place!
					</p>

				</div><!-- End of contentleft -->

				<!-- Start of contentright -->
				<div class="contentright">

					<!-- Start of button green -->
					<div class="button_green_image">
						<a href="javascript:;" data-action="fb-login">Log in with Facebook</a>
					</div><!-- End of button green -->

				</div><!-- End of contentright -->

			</div><!-- End of content wrapper -->

			<!-- Clear Fix --><div class="clear"></div>

		</div><!-- End of message wrapper -->
		<div id="fb-root"></div>
		<script type="text/javascript" src="js/facebook.js"></script>
		<script type="text/javascript" src="js/map.js"></script>
		<script type="text/javascript" src="js/main.js"></script>
	</body>
</html>
