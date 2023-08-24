const itemInput = document.getElementById('item');
const contenedorListado = document.getElementById('contenedor');
const botonAgregar = document.getElementById('agregar');
const botonLimpiar = document.getElementById('limpiar');

// Cargar elementos del listado desde el almacenamiento local al cargar la página
window.addEventListener('load', () => {
  const storedItems = JSON.parse(localStorage.getItem('listadoItems')) || [];
  mostrarListado(storedItems);
});

// Manejador de evento para el botón Agregar
botonAgregar.addEventListener('click', () => {
  const nuevoItem = itemInput.value.trim();

  if (nuevoItem !== '') {
    agregarItemAListado(nuevoItem);
    guardarListadoEnLocal();
    itemInput.value = '';
  }
});

// Manejador de evento para el botón Limpiar
botonLimpiar.addEventListener('click', () => {
  contenedorListado.innerHTML = '';
  localStorage.removeItem('listadoItems');
});

// Función para agregar un item al listado
function agregarItemAListado(item) {
  contenedorListado.innerHTML += `<li class="list-group-item">${item}</li>`;
}

// Función para mostrar el listado en el contenedor
function mostrarListado(items) {
  contenedorListado.innerHTML = items.map(item => `<li class="list-group-item">${item}</li>`).join('');
}

// Función para guardar el listado en el almacenamiento local
function guardarListadoEnLocal() {
  const listadoItems = Array.from(contenedorListado.children).map(item => item.textContent);
  localStorage.setItem('listadoItems', JSON.stringify(listadoItems));
}
