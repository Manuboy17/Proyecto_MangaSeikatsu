const containerCart = document.getElementById("detail-cart");
const subTotal = document.querySelector(".subtotal");
const montoTotal = document.querySelector(".total");

const cartItems = localStorage.getItem("cart");

if (cartItems) {
  const cart = JSON.parse(cartItems);

  cart.forEach(function (item) {
    const cartItem = carroTemplate(item);
    containerCart.insertAdjacentHTML("beforeend", cartItem);
  });
}

function updateCart() {
  containerCart.innerHTML = ""; // Limpiar el contenido actual del carrito
  let subtotal = 0; // Variable para almacenar el subtotal

  const cartItems = localStorage.getItem("cart");
  if (cartItems) {
    const cart = JSON.parse(cartItems);

    cart.forEach(function (item) {
      const cartItem = carroTemplate(item);
      containerCart.insertAdjacentHTML("beforeend", cartItem);
      precio = item.precio.replace("$", "")
      subtotal += parseInt(precio);
    });
  }
  subTotal.innerHTML = innerSubtotal(subtotal)
  montoTotal.innerHTML = innerTotal(subtotal)
}


function removeFromCart(title) {
  let cart = localStorage.getItem("cart");
  if (cart) {
    cart = JSON.parse(cart);
    // Filtrar el array para obtener todos los elementos excepto el que se desea eliminar
    cart = cart.filter((item) => item.titulo !== title);
    localStorage.setItem("cart", JSON.stringify(cart));
    // Actualizar el contenido del carrito
    updateCart();
  }
}

containerCart.addEventListener("click", function (event) {
  if (event.target.classList.contains("close")) {
    const item = event.target.parentNode.parentNode;
    const title = item.querySelector(".text-muted").textContent;
    removeFromCart(title);
  }
});

function innerSubtotal(subtotal) {
  return `
        <div class="d-flex align-items-center justify-content-between mb-2">
            <p>Subtotal</p>
            <p><span></span>$${subtotal}</p>
        </div> 
    `;
}

function innerTotal(total) {
    return `
        <div class="col">TOTAL</div>
        <div class="col text-right">$${total}</div>
    `
}
function carroTemplate(data) {
  return `
      <div class="row main align-items-center">
        <div class="col-2">
          <img class="img-fluid" src="${data.pic1}" />
        </div>
        <div class="col">
          <div class="row text-muted">${data.titulo}</div>
          <div class="row">Volumen 1</div>
          <div class="row">Editorial Planeta Comic</div>
        </div>
        <div class="col">
          <a class="min" href="#">-</a>
          <a href="#" class="border">1</a>
          <a class="plus" href="#">+</a>
        </div>
        <div class="col">
          ${data.precio} <span class="close">&#10005;</span>
        </div>
      </div>
    `;
}
updateCart();
