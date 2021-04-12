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