// =========================
// BOTÓN DEL MENÚ
// =========================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


// =========================
// BOTÓN MODO OSCURO
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
// BOTÓN CONOCER MÁS
// =========================

const btnMensaje = document.getElementById("btnMensaje");

btnMensaje.addEventListener("click", function () {

    alert(
        "La Inteligencia Artificial puede ayudarnos en áreas como educación, salud, tecnología, transporte y muchas más."
    );

});


// =========================
// ANIMACIÓN DE LAS TARJETAS
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