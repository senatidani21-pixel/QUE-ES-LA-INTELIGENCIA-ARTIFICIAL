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
// BOTÓN CONOCER MÁS
// =========================

const btnMensaje = document.getElementById("btnMensaje");

btnMensaje.addEventListener("click", function () {

    alert(
        "La Inteligencia Artificial podría transformar la educación, salud, transporte, trabajo y muchas otras áreas."
    );

});


// =========================
// ANIMACIÓN DE TARJETAS
// =========================

const tarjetas = document.querySelectorAll(".card");


function mostrarTarjetas() {

    tarjetas.forEach(function (tarjeta) {

        const posicion =
            tarjeta.getBoundingClientRect().top;

        const pantalla =
            window.innerHeight;

        if (posicion < pantalla - 100) {

            tarjeta.classList.add("mostrar");

        }

    });

}


window.addEventListener(
    "scroll",
    mostrarTarjetas
);


// Ejecutar al cargar la página

mostrarTarjetas();