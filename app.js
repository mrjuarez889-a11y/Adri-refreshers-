let total = 0;
let carrito = [];

const menu = document.getElementById("menu");
const totalElemento = document.getElementById("total");
const carritoCantidad = document.getElementById("cart-count");

function actualizarTotal() {
  totalElemento.textContent = "$" + total.toFixed(2);
  carritoCantidad.textContent = carrito.length;
}

bebidas.forEach((bebida) => {

  const tarjeta = document.createElement("div");
  tarjeta.className = "drink-card";

  tarjeta.innerHTML = `
    <img src="${bebida.imagen}" alt="${bebida.nombre}">

    <div class="drink-info">
      <h2>${bebida.nombre}</h2>
      <p>${bebida.descripcion}</p>

      <p class="price">$${bebida.precio.toFixed(2)}</p>

      <button class="add-btn">➕ Agregar</button>
    </div>
  `;

  tarjeta.querySelector(".add-btn").onclick = () => {
    carrito.push(bebida);
    total += bebida.precio;
    actualizarTotal();

    alert(`${bebida.nombre} agregado al pedido.`);
  };

  menu.appendChild(tarjeta);

});

actualizarTotal();
