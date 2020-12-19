/*
    # ----------------------------------------------------------------------------
    # Nombre:       sweet.js
    # Autor:        Gabriel F
    # GitHub:       https://github.com/gab98fra/
    # Creado:       19 de Diciembre 2020
    # Modificado:   19 de Diciembre 2020
    # Copyright:    (c) 2020 by Gabriel F, 2020
    # ----------------------------------------------------------------------------
*/

swal("¡Bienvenido!", "Este es un ejemplo sencillo de landing page elaborado por Webfomatica");


addEventListener("DOMContentLoaded", ()=>
{
    document.getElementById("btn_1_alert").addEventListener("click", ()=>alerta())
    document.getElementById("btn_2_alert").addEventListener("click", ()=>alerta())
}
);

function alerta()
{
    swal("Elaborado por Webfomatica","Ir al sitio de Webfomatica", {buttons: {cancel: "Cancelar",  catch: {
        text: "Aceptar!",
        value: "catch",
      } }})
    .then((value) => {
        switch (value) {
 
            case "defeat":
                break;
         
            case "catch":
                location.href ="https://webfomatica.com";
                break;
        
          }
});
}