let totalItems = 0;
let totalPrecio = 0;
let productosAgregados = [];

function agregarAlCarro(nombre, precio) {
  totalItems++;
  totalPrecio += precio;
  productosAgregados.push(nombre);

  document.getElementById('total-productos').textContent = totalItems;
  document.getElementById('total-precio').textContent = totalPrecio;

  alert("¡Producto agregado!");

  if (totalPrecio > 50) {
    alert("¡Envio gratis aplicado!");
  }

  console.log("Productos en el carro:", productosAgregados);
}

function vaciarCarro() {
  totalItems = 0;
  totalPrecio = 0;
  productosAgregados = [];

  document.getElementById('total-productos').textContent = "0";
  document.getElementById('total-precio').textContent = "0";

  alert("Carro vaciado");
}
