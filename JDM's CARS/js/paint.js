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
    `<img src="/JDM's CARS/IMG/santosgtr.png">`,
    `<img src="/JDM's CARS/IMG/santossupra.png">`,
    `<img src="/JDM's CARS/IMG/santoschaser.png">`,
    
  ];
  const randomNumber = Math.floor(Math.random() * 3);
  // let img = document.createElement("img");
  // img.setAttribute("src", paths[0])
  const divImage = document.getElementById("divImage");
  divImage.innerHTML = paths[randomNumber];
}