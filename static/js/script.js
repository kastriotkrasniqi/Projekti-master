
$(".register-form").hide(function (){
	$("#register").click(function () {
	  $(".login-box").hide();
	  $(".register-form").show();
	});
});

  function funksioni(){
	$(".register-form").hide();
	$(".login-box").show();
  }

  function validateform() {
	var username = document.getElementById("username");
	var password = document.getElementById("pass");

	if (username.value == "" || username.value == null) {
	  alert("username can't be blank");
	  return false;
	}else if(password.value < 6){
	alert("password  must be at least 6 characters long");
	return false;
}	else{
	alert("ju u loguat me sukses.")

}
  }

  function validateform2() {
	var username = document.getElementById("usernamee");
	var email = document.getElementById("emaill");
	var password = document.getElementById("passs");
	var repassword = document.getElementById("repass");

	if(username.value == "" || username.value==null){
		alert("username can't be blank");
		return false;
	}else if(email.value == null || email.value == ""){
		alert("email can't be blank");
		return false;
	}else if(password.value < 6 ){
		alert("password can't be blank");
		return false;
	}else if(repassword.value != password.value){
		alert("passwords don't match");
		return false;
	}
	else{
		alert("Register is done");

	}


  }

  function contactform(){
	  var name =document.getElementById("emri");
	  var email=document.getElementById("email");
	  var mesazhi=document.getElementById("mesazhi");

	  if(name.value=="" || name.value==null){
		  alert("name cant be blank");
		  return false;
	  }
		else if(email.value=="" || email.value==null){
			alert("email cant be blank");
			return false;
		}else if(mesazhi.value == "" || mesazhi.value==null){
			alert("Message cant be blank");
			return false;

		}
		else{
			alert("Message is sent");
		}
	  }
