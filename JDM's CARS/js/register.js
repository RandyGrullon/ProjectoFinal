

// Register
const buttonRegister = document.getElementById("buttonRegister");

buttonRegister.addEventListener("click", (e) => {
  e.preventDefault();
  const newUsername = document.getElementById("inputUsernameRegister").value;
  const newEmail = document.getElementById("inputEmailRegister").value;
  const newPassword = document.getElementById("inputPasswordRegister").value;

  console.log(newUsername);
  console.log(newEmail);
  console.log(newPassword);

  const newUser = {
    username: newUsername,
    email: newEmail,
    password: newPassword,
  };

  users.push(newUser);
});
