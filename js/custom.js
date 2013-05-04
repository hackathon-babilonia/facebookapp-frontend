

/***************************************************
				  TABBED AREA
***************************************************/


$(document).on("ready", function() {
	
	console.log("Ready");

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
	function loadMap() {
		var latlng = new google.maps.LatLng(-22.817129,-47.070022);
		var myOptions = {
			zoom : 4,
			center : latlng,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document
				.getElementById("map"), myOptions);

		var marker = new google.maps.Marker({
			position : latlng,
			map : map,
			title : "Unicamp"
		});

	}
	
	// Load the Facebook SDK
	window.fbAsyncInit = function()
    {
        // init the FB JS SDK
        FB.init(
        {
            appId 		: '257313711081974', // App ID from the app dashboard
            channelUrl 	: '/channel.php', // Channel file for x-domain comms
            status 		: true, // Check Facebook Login status
            cookie     	: true, // enable cookies to allow the server to access the session
            xfbml 		: true // Look for social plugins on the page
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


