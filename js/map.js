var map = {
	loadMap: function(callback)
	{
		//hide landing
		$("#landing").fadeOut("slow", function()
		{
			//load map
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
			
			//show map
			$("#map").fadeIn("fast");
			
			//callback
			if(typeof callback === "function") callback();
		});
	}
}