let sobreMiBtn = document.querySelector('.sobreMi')
let proyectosBtn = document.querySelector('.proyectos');
let conocimientosBtn = document.querySelector('.god')
let contactoBtn = document.querySelector('.contacto')
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);



proyectosBtn.addEventListener('click', function () {
    window.scroll(0,findPos(document.getElementById("proyectos")));
})
sobreMiBtn.addEventListener('click', function () {
    window.scroll(0,findPos(document.getElementById("sobreMi")));
})
conocimientosBtn.addEventListener('click', function () {
    window.scroll(0,findPos(document.getElementById("carouselExampleCaptions")));
})
contactoBtn.addEventListener('click', function () {
    window.scroll(0,findPos(document.getElementById("contacto")));
})



function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}











































