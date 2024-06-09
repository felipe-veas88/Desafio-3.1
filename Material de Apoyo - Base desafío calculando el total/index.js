// Variables
const precio = 400000;
let cantidad = 0;

// Elementos del DOM
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");
const botonIncrementar = document.querySelector(".incrementar");
const botonDecrementar = document.querySelector(".decrementar");

// Inicialización
precioSpan.innerHTML = precio;
valorTotalSpan.innerHTML = 0;

// Funciones
const actualizarTotal = () => {
  const total = precio * cantidad;
  valorTotalSpan.innerHTML = total;
};

const incrementarCantidad = () => {
  cantidad++;
  cantidadSpan.innerHTML = cantidad;
  actualizarTotal();
};

const decrementarCantidad = () => {
  if (cantidad > 0) {
    cantidad--;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
  }
};

// Event Listeners
botonIncrementar.addEventListener("click", incrementarCantidad);
botonDecrementar.addEventListener("click", decrementarCantidad);
