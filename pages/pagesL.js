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

 
  document.getElementById('descargarCV').addEventListener('click', function(event) {
   
    event.preventDefault();

 
    var rutaHojaDeVida = "content/Hoja_de_vida_Jairo_Andres_Vergara2024_-_Software9.5N.pdf";

   
    var linkDeDescarga = document.createElement('a');
    linkDeDescarga.href = "content/Hoja_de_vida_Jairo_Andres_Vergara2024_-_Software9.5N.pdf";
    linkDeDescarga.download = 'Hoja_de_vida_Jairo_Andres_Vergara2024_-_Software9.5N.pdf';

  
    document.body.appendChild(linkDeDescarga);
    linkDeDescarga.click();

    
    document.body.removeChild(linkDeDescarga);
  });
});
