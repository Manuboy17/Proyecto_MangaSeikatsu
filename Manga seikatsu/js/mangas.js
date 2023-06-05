fetch('anime.json')
    .then(res => res.json())
    .then(data => {
        const contenedor = document.querySelector('#card-container');
        data.forEach(producto => {
            const cardHTML = crearCard(producto);
            contenedor.insertAdjacentHTML('beforeend', cardHTML);
        });
    })
function crearCard(data) {
  return `
    <div class="col mb-4">
        <div class="product-grid card h-100 border-light mb-3">
            <div class="product-image">
                <a href="product_page.html" class="image" >
                    <img class="pic-1" alt="${data.titulo}"
                        src="${data.pic1}"
                    />
                    <img class="pic-2" id="image-event" alt="${data.titulo}"
                        src="${data.pic2}" 
                    />
                </a>
                <ul class="product-links">
                    <li>
                        <a href="#"><i class="fa fa-shopping-cart add-cart"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="far fa-heart"></i></a>
                    </li>
                </ul>
            </div>
            <div class="product-content card-body">
                <ul class="rating">
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="far fa-star"></li>
                </ul>
                <h5 class="card-title" id="nombreManga">${data.titulo}</h5>
                <div class="price">$${data.precio} </div>
            </div>
        </div>
    </div>
   `
}