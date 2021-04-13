// Los Santos Custom Build
const paintyPaint = document.getElementById("paintyPaint");
const color = document.getElementById("inputColor");

color.addEventListener("input", changeBackground);

function changeBackground() {
  paintyPaint.style.background = color.value;
}

// // Random Los Santos Fotix
function randomImgPaint() {
  const paths = [
    `<img src="resources/img/paint/torqueGT.png">`,
    `<img src="resources/img/paint/supra.png">`,
    `<img src="resources/img/paint/nissanGTR.png">`,
  ];
  const randomNumber = Math.floor(Math.random() * 3);
  // let img = document.createElement("img");
  // img.setAttribute("src", paths[0])
  const divImage = document.getElementById("divImage");
  divImage.innerHTML = paths[randomNumber];
}

// Login
const users = [
	{
	  username: "eddy",
	  password: "1234"
	},
	{
	  username: "Valentin Sanchez",
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
	
	  const newUser=[{
		username: inputUserNameRegister,
		password: inputPasswordRegister
	  }]

	  users.push(newUser);
  })