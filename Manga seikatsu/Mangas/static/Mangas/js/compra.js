var cards = document.querySelectorAll(".product-grid");

cards.forEach(function (card) {
  var button = card.querySelector(".add-cart");
  button.addEventListener("click", function (event) {
    event.preventDefault();

    var titulo = card.querySelector(".card-title").textContent;
    var price = card.querySelector(".price").textContent;
    var pic1 = card.querySelector(".pic-1").getAttribute("src");

    var cartObject = {
      titulo: titulo,
      precio: price,
      pic1: pic1,
      cantidad: 1,
    };

    let cartItems = localStorage.getItem("cart");
    let cart = [];
    if (cartItems) {
      cart = JSON.parse(cartItems);
    }

    var mangaIndex = cart.findIndex(function (item) {
      return item.titulo === titulo;
    });

    if (mangaIndex !== -1) {
      cart[mangaIndex].cantidad += 1;
    } else {
      cart.push(cartObject);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  });
});


