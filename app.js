let carrito = [];
let total = 0;

const menu = document.getElementById("menu");
const totalElemento = document.getElementById("total");
const carritoCantidad = document.getElementById("cart-count");
const buscar = document.getElementById("buscar");

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

    tarjeta.querySelector(".add-btn").addEventListener("click", () => {
      carrito.push(bebida);
      total += bebida.precio;
      actualizarResumen();
    });

    menu.appendChild(tarjeta);
  });
}

buscar.addEventListener("input", () => {
  const texto = buscar.value.toLowerCase();

  const resultado = bebidas.filter((bebida) =>
    bebida.nombre.toLowerCase().includes(texto)
  );

  mostrarBebidas(resultado);
});

mostrarBebidas(bebidas);
actualizarResumen();

document.getElementById("cartButton").addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("Tu pedido está vacío.");
    return;
  }

  let mensaje = "🛒 Tu pedido:\n\n";

  carrito.forEach((bebida) => {
    mensaje += `• ${bebida.nombre} - $${bebida.precio.toFixed(2)}\n`;
  });

  mensaje += `\nTOTAL: $${total.toFixed(2)}`;

  alert(mensaje);
});
