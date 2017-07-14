function validate()
			{
			
			
				var name = document.getElementById("NAME").value;
				var password = document.getElementById("PASSWORD").value;
				var err = document.getElementById("ERR");
				
				if(name.trim()=="")
				{
					err.innerHTML="Please Enter Username";
					return false;
				}
				if(password.trim()=="")
				{
					err.innerHTML="Please Enter Password";
					return false;
				}
				return true;
			}