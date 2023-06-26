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
    };

    let cartItems = localStorage.getItem("cart");
    let cart = [];
    if (cartItems) {
      cart = JSON.parse(cartItems);
    }
    // Verificar si el manga ya está en el carrito
    var mangaExists = cart.some(function (item) {
      return item.titulo === titulo;
    });

    if (mangaExists) {
      // Mostrar la alerta de que el manga ya está en el carrito
      alert("¡El manga ya está en el carrito!");
    } else {
      cart.push(cartObject);
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(cart);  
    }
  });
});

// function addToCart(event) {
//   event.preventDefault();

//   const title = event.target.getAttribute("alt");
//   const pic1 = event.target.getAttribute("src");
//   const price = event.target
//     .closest(".product-grid")
//     .querySelector(".price").textContent;

//   const product = {
//     title: title,
//     pic1: pic1,
//     price: price,
//   };
//   console.log(product);

//   let cart = localStorage.getItem("cart");
//   if (cart) {
//     cart = JSON.parse(cart);
//     cart.push(product);
//   } else {
//     cart = [product];
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));
//   alert("El producto se ha agregado al carrito de compra.");

//   // window.location.href = "cart.html";
// }
