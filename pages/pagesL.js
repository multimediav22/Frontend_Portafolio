document.addEventListener("DOMContentLoaded", function() {
  // Agregar eventos de clic a los botones o enlaces aquí
  var descargarCVButton = document.getElementById("descargarCV");
  if (descargarCVButton) {
      descargarCVButton.addEventListener("click", function(event) {
          event.preventDefault();

          // Lógica para descargar el CV
          var rutaHojaDeVida = "content/Hoja_de_vida_Jairo_Andres_Vergara2024_-_Software9.5N.pdf";

          var linkDeDescarga = document.createElement('a');
          linkDeDescarga.href = rutaHojaDeVida;
          linkDeDescarga.download = 'Hoja_de_vida_Jairo_Andres_Vergara2024_-_Software9.5N.pdf';

          document.body.appendChild(linkDeDescarga);
          linkDeDescarga.click();

          document.body.removeChild(linkDeDescarga);
      });
  }
  // Agregar más eventos según sea necesario
});
