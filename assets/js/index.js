// codigo proporcionado por bootstrap para los Tooltips

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$(document).ready(function () {

  // Evento click enviar por correo (alert)  
  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
  });

  // Evento dblclick cambia color + restablece color original 
  var guardaColor = $(".recetas h3").css("color");

  console.log("color original", guardaColor);

  $(".recetas h3 ").dblclick(function () {

    var colorActual = $(this).css("color");

    if (colorActual == guardaColor) {
      $(this).css("color", "red");
      console.log("se cambio el color a este: ", this);
    } else {
      $(this).css("color", guardaColor);
      console.log("se cambio el color a este (else): ", guardaColor);
    }

  });

  //Utilizando selectores de clase con jquery toggle
  $(".card-title").on("click", function () {
    console.log("Clic en el card-title");
    $(".card-text").toggle("slow", function () {
      console.log("anima el card-text");

    });
  });

});