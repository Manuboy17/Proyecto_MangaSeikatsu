const containerProduct = document.getElementById("cont-manga");
const btnCompra = document.getElementById("btn-compra");

btnCompra.addEventListener("click", function (e) {
  e.preventDefault();
  var pic1 = containerProduct.querySelector(".product").getAttribute("src");
  var titulo = containerProduct.querySelector(".title").textContent;
  var precio = containerProduct.querySelector(".precio").textContent;

  var cartObject = {
    titulo: titulo,
    precio: precio,
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

