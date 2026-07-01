let carrito = [];
let total = 0;

const menu = document.getElementById("menu");
const buscar = document.getElementById("buscar");
const totalElemento = document.getElementById("total");
const carritoCantidad = document.getElementById("cart-count");
const botonCarrito = document.getElementById("cartButton");

function actualizarResumen() {
  totalElemento.textContent = "$" + total.toFixed(2);
  carritoCantidad.textContent = carrito.length + " bebida(s)";
}

function mostrarBebidas(lista) {
  menu.innerHTML = "";

  lista.forEach((bebida) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "drink-card";

    tarjeta.innerHTML = `
      <img src="${bebida.imagen}" alt="${bebida.nombre}">
      <div class="drink-info">
        <h2>${bebida.nombre}</h2>
        <p>${bebida.descripcion}</p>
        <div class="price">$${bebida.precio.toFixed(2)}</div>
        <button class="add-btn">➕ Agregar</button>
      </div>
    `;

    const botonAgregar = tarjeta.querySelector(".add-btn");

    botonAgregar.onclick = () => {
      carrito.push(bebida);
      total += bebida.precio;
      actualizarResumen();
    };

    menu.appendChild(tarjeta);
  });
}

buscar.oninput = () => {
  const texto = buscar.value.toLowerCase();

  const resultado = bebidas.filter((bebida) =>
    bebida.nombre.toLowerCase().includes(texto)
  );

  mostrarBebidas(resultado);
};

botonCarrito.onclick = () => {

  if (carrito.length === 0) {
    alert("🛒 Tu carrito está vacío.");
    return;
  }

  let mensaje = "🛒 TU PEDIDO\n\n";

  carrito.forEach((bebida, i) => {
    mensaje += `${i + 1}. ${bebida.nombre} - $${bebida.precio.toFixed(2)}\n`;
  });

  mensaje += "\n----------------------";
  mensaje += "\nTOTAL: $" + total.toFixed(2);

  alert(mensaje);
};

mostrarBebidas(bebidas);
actualizarResumen();
