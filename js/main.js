var server = 
{
	url: "//ec2-54-235-228-194.compute-1.amazonaws.com:8080"
};

var infowindowLevel = 0;
var user = 
{
	uid: null,
	name: null,
	edu: null, 
	access_token: null
};

var flow = 
{
	login: function(cb)
	{
		facebook.login(function(r, access_token)
		{
			if(!r)
			{
				alert("Você precisa entrar com o Facebook para usar o app. Por favor, tente novamente.");
				document.location.reload();
			}
			else
			{
				//get user id
				FB.api('/me', function(response) 
    			{
    				user.name = response.name;
        			user.uid = response.id;
        			user.access_token = access_token;
        			
        			//get user education
					facebook.getEducation(function(r)
					{
						if(r == "Universidade de São Paulo")
						{
							user.edu = 1;
						}
						else if(r == "Instituto Tecnológico de Aeronáutica")
						{
							user.edu = 2;
						}
						else
						{
							user.edu = 0; // default: unicamp
						}
						
						$.ajax(
						{
							url : server.url + "/usuario/save?callback=?",
							data :
							{
								access_token: access_token,
								edu: user.edu
							},
							dataType : "jsonp",
							success: function(data)
							{
								if (data.result == "SUCCESS")
								{
									// Prepare, initialize and load map
									map.loadMap();

									// callback
									if ( typeof cb === "function")
										cb(true);
								}
								else
								{
									alert("Ooops, algo deu errado com o login. Atualize a página e tente de novo");
									document.location.reload();
								}
							}
						}); 
					});
    			});
			}
		});
	},
	showCreateForm: function()
	{
		$("[data-action = 'search-filters']").fadeOut("slow", function()
		{
			$("#new-room").fadeIn("slow");
		});
	},
	showFilterForm: function()
	{
		$("#new-room").fadeOut("slow", function()
		{
			$("[data-action = 'search-filters']").fadeIn("slow");
		});
	},
	submitLocalForm: function(){
		$.ajax({
			url : server.url + "/local/createLocal/save?callback=?",
			data :
			{
				access_token: access_token,
				nome: $("#nome").val(),
				endereco: $("#endereco").val(),
				numero: $("#numero").val(),
				bairro: $("#bairro").val(),
				complemento : null,
				cidade : $("#cidade").val(),
				estado: $("#estado").val(),
				descricao: $.("#nome").val(),
				preco: $.("#endereco").val(),
				tipo : $("input[name=tipo]:checked").val(),
				genero : $("input[name=sexo]:checked").val()
			},
			dataType : "jsonp",
			success: function(data)
			{
				if (data.result == "SUCCESS")
				{
					alert("INSERIU!!!!!");
					flow.showVagaForm();
				}
				else
				{
					alert("Ooops, algo deu errado com a inserção! Atualize a página e tente de novo");
					document.location.reload();
				}
			}
		});
	},
	submitVagaForm: function(){
		$.ajax({
			url : server.url + "/vagas/createVaga/save?callback=?",
			data :
			{
				access_token: access_token,
				descricao: $("#nome").val(),
				preco: $("#endereco").val(),
				localId: $("#numero").val()
			},
			dataType : "jsonp",
			success: function(data)
			{
				if (data.result == "SUCCESS")
				{
					alert("INSERIU!!!!!");
					flow.showFilterForm();
				}
				else
				{
					alert("Ooops, algo deu errado com a inserção! Atualize a página e tente de novo");
					document.location.reload();
				}
			}
		});
	}
};

// Bind clicks
$("[data-action = 'fb-login']").click(function()
{
	$("[data-action = 'fb-login']").hide();
	$("[data-action = 'status-msg']").show();
	$("[data-action = 'status-msg']").html("Connecting...");
	$("[data-action = 'loading-img']").show();
	
	flow.login(function()
	{
		$(".topmenuwrapper").show();
		$("[data-action = 'status-msg']").html("Searching for rooms...");
		$("[data-action = 'loading']").hide();
	});
});

$("[data-action='new-room']").click(function()
{
	flow.showCreateForm();
});

$("[data-action='filter-form']").click(function()
{
	flow.showFilterForm();
});


// Search filters jQuery UI bindings
$(function()
{
	// ----- PRICE ------//
	$("#price-range").slider(
	{
		range : true,
		min : 0,
		max : 2000,
		values : [300, 800],
		slide : function(event, ui)
		{
			$("#price-amount").html("R$" + ui.values[0] + " - R$" + ui.values[1]);
		}

	});
	$("#price-amount").val("$" + $("#price-range").slider("values", 0) + " - $" + $("#price-range").slider("values", 1));
	
	var price_spinner = $( "#price-spinner" ).spinner
	({
		min: 0,
		max: 2000,
		step: 50,
		numberFormat: "n"
	}).spinner( "value", 500 );
	
	// ------ DISTANCE -----//
	var distance_spinner = $( "#distance-spinner" ).spinner
	({
		min: 5,
		max: 120,
		step: 5,
		numberFormat: "n"
	}).spinner( "value", 120 );
}); 

// BIND SEARCH EVENTS
$('input[name=distance]').click(function(){map.getMarkers();});
$('input[name=moradia]').click(function(){map.getMarkers();});
$('#price-range').on("slidechange", function(){map.getMarkers();});
$('input[name=tipo]').click(function(){map.getMarkers();});
$('#distance-spinner').on("spinchange", function(){map.getMarkers();});
$('#distance-spinner').on("spin", function(){map.getMarkers();});












