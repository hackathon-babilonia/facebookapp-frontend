var facebook = 
{
	login: function(cb)
	{
		FB.getLoginStatus(function(response) 
		{
			if (response.status === 'connected') 
			{
				// connected to facebook
				// initialize map
				console.log("Successfully connected. Initializing map...");
				
				if(typeof cb === 'function')
					cb(true, response.authResponse.accessToken);
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
			        	
			        	if(typeof cb === 'function')
							cb(true, response.authResponse.accessToken);
			        } 
			        else 
			        {
			            // cancelled
			        	alert("É necessário entrar com o Facebook para acessar o aplicativo.");
			        	document.loacation.reload();
			        	
			        	if(typeof cb === 'function')
							cb(false, null);
			        }
			    });
			}
		});
	},
	getEducation: function(cb)
	{
		FB.api(
		{
			method : 'fql.query',
			query : "select education from user where uid=me()"
		}, function(r)
		{
			if(!r || !r[0])
			{
				if(typeof cb === 'function')
					cb(false);
			}
			else
			{
				if(typeof cb === 'function')
					cb(r[0]["education"][0]["school"]["name"]);
			}
		});
	},
	recomendarVaga: function()
	{
		function sendRequestViaMultiFriendSelector()
		{
			FB.ui(
			{
				method : 'apprequests',
				message : 'Recomende essa vaga!'
			}, function(r)
			{
				console.log(r);
			});
		}

	}
}