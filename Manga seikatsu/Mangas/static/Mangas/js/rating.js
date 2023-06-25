

function generar_estrellas(rating) {
  var rating_rounded = Math.round(rating);
  var estrellas_html = "";

  for (var i = 0; i < rating_rounded; i++) {
    estrellas_html += '<li class="fa fa-star"></li>';
  }

    for (var j = rating_rounded; j < 5; j++) {
        estrellas_html += '<li class="far fa-star"></li>';
    }

  return estrellas_html;
}
var rating = 1;
var estrellas_html = generar_estrellas(rating);
document.getElementsByClassName("rating").innerHTML = estrellas_html;




document.addEventListener("DOMContentLoaded", function () {
 
  var cards = document.getElementsByClassName("card");

  // Iterar sobre las tarjetas y aplicar la función deseada
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      
        var rating_rounded = Math.round(rating);
        var estrellas_html = "";

        for (var i = 0; i < rating_rounded; i++) {
          estrellas_html += '<li class="fa fa-star"></li>';
        }

        for (var j = rating_rounded; j < 5; j++) {
          estrellas_html += '<li class="far fa-star"></li>';
        }
      // Agrega aquí la lógica adicional que deseas aplicar a cada tarjeta
    });
  }
});
