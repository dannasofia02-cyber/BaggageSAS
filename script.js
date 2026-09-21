// =======================================
// BAGGAGE SAS
// script.js
// =======================================

// Esperar a que cargue toda la página
document.addEventListener("DOMContentLoaded", function () {

    // Obtener botones del menú
    const botones = document.querySelectorAll(".menu-btn");

    // Obtener todas las secciones
    const secciones = document.querySelectorAll(".contenido");

    // ===============================
    // Función para mostrar secciones
    // ===============================
    function mostrarSeccion(id) {

        // Ocultar todas
        secciones.forEach(function (seccion) {
            seccion.classList.remove("active");
        });

        // Mostrar la seleccionada
        const destino = document.getElementById(id);

        if (destino) {
            destino.classList.add("active");
        }

        // Cambiar botón activo
        botones.forEach(function (boton) {

            boton.classList.remove("active");

            if (boton.dataset.section === id) {
                boton.classList.add("active");
            }

        });

        // Volver arriba suavemente
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    // ==================================
    // Eventos para botones del menú
    // ==================================
    botones.forEach(function (boton) {

        boton.addEventListener("click", function () {

            mostrarSeccion(this.dataset.section);

        });

    });

    // ==================================
    // Eventos para el mapa del sitio
    // ==================================
    const enlacesMapa = document.querySelectorAll(".mapa a");

    enlacesMapa.forEach(function (enlace) {

         enlace.addEventListener("click", function (e) {

             e.preventDefault();

             const seccion = this.dataset.link;

             mostrarSeccion(seccion);

             const destino = this.dataset.scroll;

             if(destino){

                 setTimeout(function(){

                     const elemento = document.getElementById(destino);

                     if(elemento){

                         elemento.scrollIntoView({

                             behavior:"smooth",

                             block:"start"

                          });

                       }

                  },300);

             }

         });

     });
});