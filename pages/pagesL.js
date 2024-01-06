// pagesL.js

 
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

