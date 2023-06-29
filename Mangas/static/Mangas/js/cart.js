const containerCart = document.getElementById("detail-cart")
const subTotal = document.querySelector(".subtotal")
const montoTotal = document.querySelector(".total")
const btnCompra = document.getElementById("btn-pago")



let cartItems = localStorage.getItem("cart");
cartItems = cartItems ? JSON.parse(cartItems) : [];

function updateCart() {
  containerCart.innerHTML = "";
  let subtotal = 0;

  cartItems.forEach(function (item) {
    const cartItem = carroTemplate(item);
    containerCart.insertAdjacentHTML("beforeend", cartItem);

    const cartItemElement = containerCart.lastElementChild;
    const centerValue = cartItemElement.querySelector(".border");
    const precioElement = cartItemElement.querySelector(".precio");
    
    const cantidad = parseInt(centerValue.innerText);
    const precio = parseFloat(precioElement.innerText.replace("$", ""));

    const itemSubtotal = cantidad * precio;
    subtotal += itemSubtotal;
  });

  subTotal.innerHTML = innerSubtotal(subtotal);
  montoTotal.innerHTML = innerTotal(subtotal);
}
btnCompra.addEventListener("click", function() {
  localStorage.clear();
  updateCart();
})

document.addEventListener("DOMContentLoaded", function () {
  updateCart();

  containerCart.addEventListener("click", function (event) {
    if (event.target.classList.contains("min")) {
      event.preventDefault();

      const container = event.target.closest(".col");
      const centerValue = container.querySelector(".border");

      let value = parseInt(centerValue.innerText);
      value = Math.max(value - 1, 1);

      centerValue.innerText = value.toString();

      const index = Array.from(containerCart.children).indexOf(container.parentNode);

      if (index !== -1 && index < cartItems.length) {
        cartItems[index].cantidad = value;
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }

      updateCart();
    } else if (event.target.classList.contains("plus")) {
      event.preventDefault();

      const container = event.target.closest(".col");
      const centerValue = container.querySelector(".border");

      let value = parseInt(centerValue.innerText);
      value += 1;

      centerValue.innerText = value.toString();

      const index = Array.from(containerCart.children).indexOf(container.parentNode);

      if (index !== -1 && index < cartItems.length) {
        cartItems[index].cantidad = value;
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }

      updateCart();
    } else if (event.target.classList.contains("close")) {
      const item = event.target.parentNode.parentNode;
      const title = item.querySelector(".text-muted").textContent;
      removeFromCart(title);
    }   
  });
  
});


function removeFromCart(title) {
  cartItems = cartItems.filter((item) => item.titulo !== title);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  updateCart();
}

btnCompra.addEventListener("click", function() {
  localStorage.clear();
  updateCart();
})

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
  `;
}

function carroTemplate(data) {
  return `
    <div class="row main align-items-center">
      <div class="col-2">
        <img class="img-fluid" src="${data.pic1}" />
      </div>
      <div class="col">
        <div class="row text-muted">${data.titulo}</div>
      </div>
      <div class="col">
        <a class="min" href="#">-</a>
        <span class="border">${data.cantidad}</span>
        <a class="plus" href="#">+</a>
      </div>
      <div class="col">
        <span class="precio">${data.precio}</span>
        <span class="close">&#10005;</span>
      </div>
    </div>
  `;
}

updateCart();
