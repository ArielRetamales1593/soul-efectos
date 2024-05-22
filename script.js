jQuery(document).ready(function () {
  "use strict";
  $(".slider").ripples({
    dropRadius: 200,
    perturbance: 0.805,
  });
});

// Definir un objeto que asocie cada pilar con su descripción correspondiente
var descripciones = {
  "Customer Centric Marketing": "Descripción de Customer Centric Marketing",
  Strategy: "Descripción de Strategy",
  Growth: "Descripción de Growth",
  "Data-Driven": "Descripción de Data-Driven",
  "Martech + IA": "Descripción de Martech + IA",
};

// Función para cambiar la descripción cuando se hace clic en un pilar
function cambiarDescripcion(pilar) {
  var textoPilares = document.querySelector(".texto_pilares");
  textoPilares.textContent = descripciones[pilar];
}
