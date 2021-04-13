

const users = [
	{
	  username: "eddy",
	  email:"eddy@jdm.com",
	  password: "1234"
	},
	{
	  username: "Valentin Sanchez",
	  email: "valentin.sanchez13@gmail.com",
	  password: "bestprof"
	},
  ];

  // Register
  const buttonRegister = document.getElementById("buttonRegister");
  buttonRegister.addEventListener("click", e => {
	  e.preventDefault();
	  const inputUserNameRegister = document.getElementById("inputUserNameRegister").value;
	  const inputPasswordRegister = document.getElementById("inputPasswordRegister").value;
	  const inputEmailRegister = document.getElementById("inputEmailRegister").value;
	  
	  const newUser={
		username: inputUserNameRegister,
		email:inputEmailRegister,
		password: inputPasswordRegister
	  };
	  users.push(newUser);
  })