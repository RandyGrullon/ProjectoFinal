let animacion = document.querySelectorAll(".DivCars");

function ShowScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animacion.length; i++) {
        let TopAnimation = animacion[i].offsetTop;
        if(TopAnimation < scrollTop){
            animacion[i].style.opacity = 1;
            animacion[i].classList.add("ShowUp");
        }
    }
}

window.addEventListener('scroll', ShowScroll);
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
