let sobreMiBtn = document.querySelector('.sobreMi')
let proyectosBtn = document.querySelector('.proyectos');
let conocimientosBtn = document.querySelector('.servicios')
let contactoBtn = document.querySelector('.contacto')

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);



proyectosBtn.addEventListener('click', function () {
    window.scroll(0,findPos(document.getElementById("proyectos")));
})
sobreMiBtn.addEventListener('click', function () {
    window.scroll(0,findPos(document.getElementById("sobreMi")));
})
conocimientosBtn.addEventListener('click', function () {
    window.scroll(0,findPos(document.getElementById("flex-container-4")));
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











































