let ubicacionPrincipal = window.pageXOffset;// 0

AOS.init();

window.addEventListener("scroll", function () {
        let desplazamientoActual = window.pageXOffset; // 180
        if (ubicacionPrincipal >= desplazamientoActual) { // 0 > 100
                this.document.getElementsByTagName("nav")[0].style.top = "0px";
        } else {
                document.getElementsByTagName("nav")[0].style.top = "-100px";
        }
        ubicacionPrincipal = desplazamientoActual; // 200
})

// Menu
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", function () {
        if (semaforo) {
                document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
                semaforo = false;
        } else {
                document.querySelectorAll(".hamburguer")[0].style.color = "#000";
                semaforo = true;
        }
        enlacesHeader.classList.toggle("menudos")
})