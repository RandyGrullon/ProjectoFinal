



  // Register
  const buttonRegister = document.getElementById("buttonRegister");
  buttonRegister.addEventListener("click", e => {
	  e.preventDefault();
	  const inputUserNameRegister = document.getElementById("inputUserNameRegister");
	  const inputPasswordRegister = document.getElementById("inputPasswordRegister");
	
	  const newUser=[{
		username: inputUserNameRegister,
		password: inputPasswordRegister
	  }]

	  users.push(newUser);
  })