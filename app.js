let total = 0;

const menu = document.getElementById("menu");
const totalTexto = document.getElementById("total");

bebidas.forEach((bebida)=>{

const tarjeta = document.createElement("div");
tarjeta.className="drink-card";

tarjeta.innerHTML=`
<img src="${bebida.imagen}">
<h2>${bebida.nombre}</h2>
<p>$${bebida.precio.toFixed(2)}</p>

<button>➕ Agregar</button>
`;

const boton=tarjeta.querySelector("button");

boton.onclick=()=>{

total+=bebida.precio;

totalTexto.textContent="$"+total.toFixed(2);

};

menu.appendChild(tarjeta);

});
