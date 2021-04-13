// Login
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
  
  const buttonLogin = document.getElementById("buttonLogin");
  buttonLogin.addEventListener("click", (e) => {
	e.preventDefault();
  
	  const user = document.getElementById("inputUser").value;
	  const pass = document.getElementById("inputPassword").value;
  
	  if (user.length > 0 && pass.length > 0) {
		for (let i = 0; i < users.length; i++) {
		  if (user === users[i].username && pass === users[i].password) {
			alert("Usted se ha logeado correctamente.");
			return window.location.href = "/JDM's CARS/html/Index.html";
			
		  }
		}
		alert("El usuario introducido o la contraseña es incorrecta.")
		
	  }   else {
		alert("No deje campos vacios...");
	  }
	}
  );

  



  // Register
  const buttonRegister = document.getElementById("buttonRegister");
  buttonRegister.addEventListener("click", e => {
	  e.preventDefault();
	  const inputUserNameRegister = document.getElementById("inputUserNameRegister");
	  const inputPasswordRegister = document.getElementById("inputPasswordRegister");
	console.log(inputUserNameRegister)
	  console.log(inputPasswordRegister)
	  const newUser=[{
		username: inputUserNameRegister,
		password: inputPasswordRegister
	  }]

	  users.push(newUser);
  })
  