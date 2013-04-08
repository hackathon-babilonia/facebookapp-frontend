var map = {
	loadMap: function(callback)
	{
		//hide landing
		$("#landing").fadeOut("slow", function()
		{
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
				title : "Unicamp"
			});
	                
			var contentString = '<div style="color: #000">'+
			    '<div style="color: #000">'+
			    '</div>'+
			    '<h2 style="color: #000">Universidade Estadual de Campinas (UNICAMP)</h2>'+
			    '<div style="color: #000">'+
			    '<p style="color: #000"><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
			    'sandstone rock formation in the southern part of the '+
			    'Northern Territory, central Australia. It lies 335 km (208 mi) '+
			    'south west of the nearest large town, Alice Springs; 450 km '+
			    '(280 mi) by road. Kata Tjuta and Uluru are the two major '+
			    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
			    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
			    'Aboriginal people of the area. It has many springs, waterholes, '+
			    'rock caves and ancient paintings. Uluru is listed as a World '+
			    'Heritage Site.</p>'+
			    '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
			    'http://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p>'+
			    '</div>'+
			    '</div>';
	
			var infowindow = new google.maps.InfoWindow({
			    content: contentString
			});
	
			var marker = new google.maps.Marker({
			    position: latlng,
			    map: map,
			    title:"Universidade Estadual de Campinas (UNICAMP)"
			});
	
			google.maps.event.addListener(marker, 'click', function() {
			  infowindow.open(map,marker);
			});
			
			//show map
			$("#map").fadeIn("fast");
			
			//callback
			if(typeof callback === "function") callback();
		});
	}
}