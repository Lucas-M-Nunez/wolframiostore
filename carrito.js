let carrito = [];
let botones = document.querySelectorAll(".botonesproductos");
let contenedor = document.querySelector("#carrito");
let btnCarrito = document.querySelector("#abrirCarrito");
let panel = document.querySelector("#carritoPanel");
let contador = document.querySelector("#contador");
let btnComprar = document.querySelector("#comprar");
let cards = document.querySelectorAll(".card");
const crossPanel = document.querySelector(".cross-panel");

crossPanel.addEventListener("click", () => {
  panel.classList.remove("abierto");
});

if (btnCarrito && panel) {
  btnCarrito.addEventListener("click", () => {
    panel.classList.toggle("abierto");
  });
}

btnComprar.addEventListener('click', () => {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío. Agrega productos antes de comprar.");
    return;
  } else {
    alert("¡Gracias por tu compra! Tu pedido ha sido procesado.");
    carrito = [];
    renderizarCarrito();
  }
});

function renderizarCarrito() {

  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = `<p class="empty-cart">Tu carrito está vacío.</p>`;
  }

  carrito.forEach((p, index) => {
    contenedor.innerHTML += `
      <div class="itemCarrito">
        <p>${p.nombre}</p>
        <p>$${p.precio}</p>
        <button onclick="eliminarProducto(${index})">❌</button>
      </div>
    `;
  });

  let total = 0;

  carrito.forEach(p => {
    total += p.precio;
  });

  contenedor.innerHTML += `<h3>Total: $${total}</h3>`;

  contador.textContent = carrito.length;
}

renderizarCarrito();

botones.forEach(boton => {
  boton.addEventListener("click", () => {

    let precioTexto = boton.parentElement.querySelector(".card-description").textContent;

    let productoobj = {
      nombre: boton.parentElement.querySelector("h3").textContent,
      precio: parseInt(precioTexto.replace("$", "").trim())
    };

    carrito.push(productoobj);

    renderizarCarrito();
  });
});


function eliminarProducto(index) {
  carrito.splice(index, 1);
  renderizarCarrito();
}