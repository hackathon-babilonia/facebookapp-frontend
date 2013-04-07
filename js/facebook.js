var facebook = {
	login: function()
	{
		FB.getLoginStatus(function(response) 
				{
			if (response.status === 'connected') 
			{
				// connected to facebook
				// initialize map
				console.log("Successfully connected. Initializing map...");
			} 
			else 
			{
				// not_authorized
				FB.login(function(response) 
				{
			        if (response.authResponse) 
			        {
			            // connected
			        	//initialize map
			        	console.log("Successfully connected. Initializing map...");
			        } 
			        else 
			        {
			            // cancelled
			        	alert("É necessário entrar com o Facebook para acessar o aplicativo.");
			        	document.loacation.reload();
			        }
			    });
			}
		});
	}
}