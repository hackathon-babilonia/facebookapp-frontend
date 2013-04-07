

/***************************************************
				  TABBED AREA
***************************************************/



jQuery(document).ready(function() {

	//When page loads...
	jQuery(".tab_content").hide(); //Hide all content
	jQuery("ul.tabs li:first").addClass("active").show(); //Activate first tab
	jQuery(".tab_content:first").show(); //Show first tab content

	//On Click Event
	jQuery("ul.tabs li").click(function() {

		jQuery("ul.tabs li").removeClass("active"); //Remove any "active" class
		jQuery(this).addClass("active"); //Add "active" class to selected tab
		jQuery(".tab_content").hide(); //Hide all tab content

		var activeTab = jQuery(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		jQuery(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});
	
	//Load the Google Maps SDK
	function initialize() 
	{
		var mapOptions = 
		{
			center : new google.maps.LatLng(-34.397, 150.644),
			zoom : 8,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	}

	google.maps.event.addDomListener(window, 'load', initialize);

	var address = document.getElementById('address').value;
	geocoder.geocode(
	{
		'address' : address
	},
	function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map
					.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker(
					{
						map : map,
						position : results[0].geometry.location
					});
		} else {
			alert('Geocode was not successful for the following reason: '+ status);
		}
	});
	
	//Load the Facebook SDK
	window.fbAsyncInit = function()
    {
        // init the FB JS SDK
        FB.init(
        {
            appId : '559299187448086', // App ID from the app dashboard
            channelUrl : '//hackathon-babilonia.herokuapp.com/channel.php', // Channel file for x-domain comms
            status : true, // Check Facebook Login status
            xfbml : true // Look for social plugins on the page
        });

        // Additional initialization code such as adding Event Listeners goes here
        FB.Canvas.setAutoGrow();
    };

    // Load the SDK asynchronously
    ( function(d, s, id)
    {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id))
        {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
});

/***********************************************************************************************************************
DOCUMENT: includes/javascript.js
DESCRIPTION: This is the JavaScript required to create the accordion style menu.  Requires jQuery library
NOTE: Because of a bug in jQuery with IE8 we had to add an IE stylesheet hack to get the system to work in all browsers. I hate hacks but had no choice :(.
************************************************************************************************************************/

jQuery(document).ready(function() {
	 
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	jQuery('.accordionButton').click(function() {

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		jQuery('.accordionButton').removeClass('on');
		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	jQuery('.accordionContent').slideUp(200);
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if(jQuery(this).next().is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			jQuery(this).addClass('on');
			  
			//OPEN THE SLIDE
			jQuery(this).next().slideDown(200);
		 } 
		  
	 });
	  
	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	jQuery('.accordionButton').mouseover(function() {
		jQuery(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		jQuery(this).removeClass('over');										
	});
	
	/*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	
	/********************************************************************************************************************
	CLOSES ALL S ON PAGE LOAD
	********************************************************************************************************************/	
	jQuery('.accordionContent').hide();
	
	jQuery("#open").trigger('click');

});


