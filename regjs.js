function validate(){
	var name=document.getElementById("USERNAME").value;
	var code=document.getElementById("CODE").value;
	var phone=document.getElementById("MOBILE").value;
	var email=document.getElementById("EMAIL").value;
	var password=document.getElementById("PASSWORD").value;
	var err=document.getElementById("error");

		if(name.trim()=="" || email.trim()=="" || phone.trim()=="" || password.trim()=="")
		{
			err.innerHTML="Please enter all the fields";
			return false;
		}
		if(code == "--select--")
		{
			err.innerHTML="Please enter a valid code";
			return false;
		}
		if(/[0-9]/g.test(phone)==false)
		{
			err.innerHTML="Not a valid phone no.";
			return false;
		}
		if(phone.length!=10)
		{
			err.innerHTML="Phone no. should have 10 digits";
			return false;
		}

		if(password.length<6)
		{
			err.innerHTML="Password is too small";
			return false;
		}
	return true;
}