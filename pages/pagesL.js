// pagesL.js

$(document).ready(function() {
  // SMOOTH SCROLL MENU
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function() {
        window.location.hash = hash;
      });
    }
  });

  // FIXED MENU COLORS
  $(window).trigger('scroll');
  $(window).bind('scroll', function() {
    var pixels = 50; // pixeles abajo
    if ($(window).scrollTop() > pixels) {
      $('.nav').addClass('fixed');
      $('.menu a').css({ "color": "#354757" });
      $('.logo').css({ "color": "#354757" });
    } else {
      $('.nav').removeClass('fixed');
      $('.menu a').css({ "color": "#BABCBD" });
      $('.logo').css({ "color": "#BABCBD" });
    }
  });

  // Descargar hoja de vida
  document.getElementById('descargarCV').addEventListener('click', function(event) {
    // Evitar el comportamiento predeterminado del enlace
    event.preventDefault();

    // Obtener la ruta del archivo desde el atributo "data-href"
    var rutaHojaDeVida = "content/Hoja_de_vida_Jairo_Andres_Vergara2024_-_Software9.4N.pdf"; // Reemplaza con la ruta correcta

    // Crear un enlace temporal (elemento 'a') para descargar el archivo
    var linkDeDescarga = document.createElement('a');
    linkDeDescarga.href = "content/Hoja_de_vida_Jairo_Andres_Vergara2024_-_Software9.4N.pdf";
    linkDeDescarga.download = 'Hoja_de_vida_Jairo_Andres_Vergara2024_-_Software9.4N.pdf';

    // Agregar el enlace temporal al documento y hacer clic en él
    document.body.appendChild(linkDeDescarga);
    linkDeDescarga.click();

    // Eliminar el enlace temporal del documento
    document.body.removeChild(linkDeDescarga);
  });
});
