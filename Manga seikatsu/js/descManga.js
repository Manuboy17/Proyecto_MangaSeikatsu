document.addEventListener("DOMContentLoaded", function () {
  const imagen = document.getElementById("image-event");

  fetch("anime.json")
    .then((res) => res.json())
    .then((data) => {
      const contenedor = document.querySelector("#cont-manga");
      var cards = document.querySelectorAll(".card");
      cards.forEach(function (card) {
        card.addEventListener("click", function () {
          var cardName = this.querySelector(".card-title").textContent;

          sessionStorage.setItem("selectedCardName", cardName);
        });
      });

      window.addEventListener("beforeunload", function (event) {
        var selectedCardName = sessionStorage.getItem("selectedCardName");
        return selectedCardName;
      });

      data.forEach((i) => {
        if (sessionStorage.getItem("selectedCardName") === i.titulo) {
          const templateHtml = crearPag(i);
          contenedor.innerHTML = templateHtml;
        }
      });     
    });

  function crearPag(data) {
    return `
        <div class="col-lg-7 cont-img">
          <img src="${data.pic1}" class="product" alt="${data.titulo}">
        </div>
        <div class="col-lg-5 b-linea">
          <div class="item">
            <div class="detalles">
              <h1>${data.titulo}</h1>
              <h2>${data.editorial}</h2>
              <h6 class="text-muted">ISBN: ${data.codigo}</h6>
              <h6 class="text-muted">Numero paginas: ${data.paginas}</h6>
              <span class="desc-item text-muted">
                ${data.descripcion}
              </span>
              <div class="detalle-precio">
                <span class="info-precio">Precio</span>
                <span class="precio">$${data.precio}</span>
              </div>
            </div>
  
            <div class="btn-compras">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal"
              >
                CONSULTAR DISPONIBILIDAD
              </button>
  
              <!-- Modal -->
              <div
                class="modal fade"
                id="modal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        CONSULTA DE DISPONIBILIDAD
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">El producto esta disponibleee!  <br> puedes agregarlo al carrito uwu</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <span href="#">mangaseikatsu.com </span>
  
            <div class="btn-carrito">
              <button type="button" class="btn btn-secondary">
                <a style="text-decoration: none; color: #fff;" href="carrito.html">AGREGAR AL CARRITO</a>
              </button>
            </div>
          </div>
        </div> 
      `;
  }
});
