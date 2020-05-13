function login()
{
	var u,n;
	u=document.getElementById('uid').value;
	p=document.getElementById('pas').value;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (u=="" || p=="")
	{  
  alert("UserId or Password can't be blank");  
    
	}
	else if(!filter.test(u))
	{
		alert("Invalid UserId");
	}
	else if(p.length<6)
	{  
  alert("Password must be at least 6 characters long.");  
   
  }  
	else if(u==localStorage.getItem('Email') && p==localStorage.getItem('Password'))
	{
		alert("Login Sucessfull");
		window.close();
		window.open("Home.html");
	}
	else
		alert("Invalid login Cridentials");
}


function register()
{
	var u,c,e,p,cp;
	u=document.getElementById("uname").value;
	c=document.getElementById("cno").value;
	e=document.getElementById("em").value;
	p=document.getElementById("password").value;
	cp=document.getElementById("cpas").value;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(u==""||c==""||e==""||p==""||cp=="")
	{
		alert("input fileds can't be empty");
	}
	else
	{
		 if(isNaN(c)||c.indexOf(" ")!=-1)
           {
              alert("Enter numeric value")
              
           }
           if (c.length>10)
           {
                alert("enter 10 characters");
                
           }
           if (c.charAt(0)!="9" && c.charAt(0)!="8" && c.charAt(0)!="7")
           {
                alert("Contact number should start with 9/8/7");
                
           }
           if(c.length<10)
           {
           	alert("Contact number must be 10 digits");
           }
           else if(!filter.test(e))
			{
				alert("Invalid Email Id");
			}
			else if(p.length<6)
			{  
  					alert("Password must be at least 6 characters long.");  
   
  			}  
  			else if(cp!=p)
  			{
  				alert("password didnt match");
  			}
  			else
  			{
  				localStorage.setItem('name', u);
  				localStorage.setItem('Contact_Number',c);
  				localStorage.setItem('Email',e);
  				localStorage.setItem('Password',p);
  				alert(p);

  				window.close();
  				window.open("Login.html");
  			}

	}
}