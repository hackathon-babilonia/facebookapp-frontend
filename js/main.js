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
		facebook.login(function(r)
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
        			
        			//get user education
					facebook.getEducation(function(r)
					{
						if(r == "Universidade Estadual de Campinas")
						{
							user.edu = 0;
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
	$("[data-action = 'status-msg']").html("Por favor aguarde, estamos procurando vagas...");
	$("[data-action = 'loading-img']").show();
	
	flow.login(function()
	{
		$("[data-action = 'loading']").hide();
	});
});