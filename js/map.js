var map = {
	loadMap: function(callback)
	{
		//hide landing
		$("#landing").fadeOut("slow", function()
		{
			//show filers menu
			$("[data-action = 'search-filters']").fadeIn("slow");
		
			//load map
			var latlng = new google.maps.LatLng(-22.817129,-47.070022);
			var myOptions = {
				zoom : 15,
				center : latlng,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(document
				.getElementById("map"), myOptions);

			var marker = new google.maps.Marker({
				position : latlng,
				map : map,
				title : "Unicamp",
				icon : '/img/markers/university.png',
			});
	
			//show map
			$("#map").fadeIn("fast");
			
			//callback
			if(typeof callback === "function") callback();
		});
	}
}