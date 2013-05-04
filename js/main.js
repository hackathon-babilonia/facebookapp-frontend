var config = 
{
	backend: "http://ec2-54-235-228-194.compute-1.amazonaws.com:8080/homin"
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
		$("[data-action = 'status-msg']").html("Procurando vagas...");
		$("[data-action = 'search-filters']").fadeIn("slow");
		$("[data-action = 'loading']").hide();
	});
});


// Search filters jQuery UI bindings