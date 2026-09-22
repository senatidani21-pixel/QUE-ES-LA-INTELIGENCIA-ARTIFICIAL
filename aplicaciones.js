
// =========================
// BOTÓN DEL MENÚ
// =========================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


// =========================
// MODO OSCURO
// =========================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        darkModeBtn.textContent = "☀️ Modo claro";

    } else {

        darkModeBtn.textContent = "🌙 Modo oscuro";

    }

});


// =========================
// ANIMACIÓN DE TARJETAS
// =========================

const tarjetas = document.querySelectorAll(".card");

function mostrarTarjetas() {

    tarjetas.forEach(function (tarjeta) {

        const posicion = tarjeta.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if (posicion < pantalla - 100) {

            tarjeta.classList.add("mostrar");

        }

    });

}

window.addEventListener("scroll", mostrarTarjetas);

mostrarTarjetas();

