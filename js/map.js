var i = 0;

var map = 
{
	_obj: null,
	markers: [],
	places:[],
	infoMarkers : [],
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
			map._obj = new google.maps.Map(document
				.getElementById("map"), myOptions);
			
			//show map
			$("#map").fadeIn("fast");
			
			map.getMarkers();
			
			// ------ PLACES ------- //
		$.ajax(
		{
			url : server.url + "/place/list?callback=?",
			data :
			{
				universidade: $('input[name=moradia]:checked').val(),
			},
			dataType : "jsonp",
			success : function(data)
			{
				if (data.length)
				{
					for(i = 0; i < data.length; i++)
					{
						var tIcon = '/img/markers/airport.png';
						if(data[i].tipo == 1) {
							tIcon = '/img/markers/busstop.png';
						} else if(data[i].tipo == 2) {
							tIcon = '/img/markers/hospital.png';
						} else if(data[i].tipo == 3) {
							tIcon = '/img/markers/restaurant.png';
						} else if(data[i].tipo == 4) {
							tIcon = '/img/markers/supermarket.png';
						} else if(data[i].tipo == 5) {
							tIcon = '/img/markers/university.png';
						}
						/*map.places.push(new google.maps.Marker
						({
							position: new google.maps.LatLng(data[i].latitude, data[i].longitude),
							map: map._obj,
							title: data[i].nome, 
							icon: tIcon
						}));*/
						
						
						
						var plc = new google.maps.Marker
						({
							position: new google.maps.LatLng(data[i].latitude, data[i].longitude),
							map: map._obj,
							title: data[i].nome, 
							icon: tIcon
						});
						map.places.push(plc);
						
						var infoWindow = new google.maps.InfoWindow({
          					content: 'teste'+i
      					});
      					
          				map.infoMarkers.push(infoWindow);
          				 google.maps.event.addListener(plc, 'click', function() {
          				 	map.infoMarkers[i].setZIndex(++infowindowLevel);
				            map.infoMarkers[i].open(map._obj,plc);
         				  });
					}
					
					// callback
					if ( typeof cb === "function")
						cb(true);
					
					//show map
					$("#map").fadeTo("slow", 1);
					$("[data-action = 'status-msg']").hide();
					$("[data-action = 'loading-img']").hide();
				}
				else
				{
					$("#map").fadeTo("slow", 1);
					$("[data-action = 'status-msg']").hide();
					$("[data-action = 'loading-img']").hide();
				}
			},
			error: function(r, s, t)
			{
				console.log(t);
				$("#map").fadeTo("slow", 1);
				$("#map").fadeTo("slow", 1);
				$("[data-action = 'status-msg']").hide();
				$("[data-action = 'loading-img']").hide();
			}

		});
			
			//callback
			if(typeof callback === "function") callback();
		});
	},
	clearMarkers: function()
	{
		for(i = 0; i < map.markers.length; i++)
			map.markers[i].setMap(null);
		
		map.markers = [];
	},
	getMarkers: function()
	{
		if(!map._obj)
		{
			$("#map").hide();
			$("[data-action = 'status-msg']").hide();
			$("[data-action = 'loading-img']").hide();
			return;
		}
		
		$("#map").fadeTo("slow", 0.5);
		$("[data-action = 'status-msg']").show();
		$("[data-action = 'status-msg']").html("Procurando vagas...");
		$("[data-action = 'loading-img']").show();
	
		map.clearMarkers();
	
		// ------ LOCAIS ------- //
		$.ajax(
		{
			url : server.url + "/local/searchVagas?callback=?",
			data :
			{
				vagatipo: $('input[name=moradia]:checked').val(),
				genero: $('input[name=tipo]:checked').val(),
				precode: $("#price-range").slider("option", "values")[0],
				precoate: $("#price-range").slider("option", "values")[1],
				veiculo: $('input[name=distance]:checked').val(),
				tempo: $("#distance-spinner").spinner("value")
			},
			dataType : "jsonp",
			success : function(data)
			{
				if (data.length)
				{
					for(i = 0; i < data.length; i++)
					{
						var tIcon = '/img/markers/republica.png';
						if(data[i].tipo == 1) {
							tIcon = '/img/markers/kit.png';
						} else if(data[i].tipo == 2) {
							tIcon = '/img/markers/pensao.png';
						}
						var marker = new google.maps.Marker
						({
							position: new google.maps.LatLng(data[i].latitude, data[i].longitude),
							map: map._obj,
							title: data[i].nome + " ("+data[i].vagas.length+" vagas)", 
							icon: tIcon
						});
						map.markers.push(marker);
						var infowindow = new google.maps.InfoWindow({
              				content: 'teste'+i
          				});
          				 google.maps.event.addListener(marker, 'click', function() {
				           	infowindow.setZIndex(++infowindowLevel);
				            infowindow.open(map._obj,marker);
         				  });
          				

					}
					
					// callback
					if ( typeof cb === "function")
						cb(true);
					
					//show map
					$("#map").fadeTo("slow", 1);
					$("[data-action = 'status-msg']").hide();
					$("[data-action = 'loading-img']").hide();
				}
				else
				{
					$("#map").fadeTo("slow", 1);
					$("[data-action = 'status-msg']").hide();
					$("[data-action = 'loading-img']").hide();
				}
			},
			error: function(r, s, t)
			{
				console.log(t);
				$("#map").fadeTo("slow", 1);
				$("#map").fadeTo("slow", 1);
				$("[data-action = 'status-msg']").hide();
				$("[data-action = 'loading-img']").hide();
			}

		});
	}
}