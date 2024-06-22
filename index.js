function downloadFiles() {
  alert("Archivos descargados");
  // Aquí puedes añadir la lógica para descargar los archivos necesarios
}

document.querySelector('nav ul li a').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('story').classList.toggle('hidden');
});