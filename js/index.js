function downloadFiles() {
  alert("Archivos descargados");
  // Aquí puedes añadir la lógica para descargar los archivos necesarios
}

// TODO: Blod in the screen
function appearBlod()
{
  document.getElementById('blodyHistory').classList.toggle('visible');
}

document.querySelector('nav ul li a').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('story').classList.toggle('visible');
  // setTimeout(appearBlod, 90000) // TODO: Blod in the screen
});