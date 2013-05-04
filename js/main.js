var server = 
{
	url: "http://ec2-54-235-228-194.compute-1.amazonaws.com:8080"
};

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
					});
					
					// Perform login
					
					// Prepare, initialize and load map
					map.loadMap();
					
					// callback
					if(typeof cb === "function")
						cb();					
    			});
			}
		});
	}
};

// Bind clicks
$("[data-action = 'fb-login']").click(function()
{
	$("[data-action = 'fb-login']").hide();
	$("[data-action = 'status-msg']").html("Conectando...");
	$("[data-action = 'loading-img']").show();
	
	flow.login(function()
	{
		$(".topmenuwrapper").show();
		$("[data-action = 'status-msg']").html("Procurando vagas...");
		$("[data-action = 'loading']").hide();
	});
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
	
	// ------ DISTANCE -----//
	var distance_spinner = $( "#distance-spinner" ).spinner
	({
		min: 5,
		max: 120,
		step: 5,
		numberFormat: "n"
	}).spinner( "value", 15 );
}); 





















