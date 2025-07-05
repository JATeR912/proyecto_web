function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function actualizarFechaHora() {
    const ahora = new Date();
    const fechaElemento = document.getElementById('fecha-hoy');
    const horaElemento = document.getElementById('hora-actual');
    
    // Formateo de fecha
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    fechaElemento.textContent = ahora.toLocaleDateString('es-ES', opcionesFecha);
    
    // Formateo de hora
    horaElemento.textContent = 
        `${ahora.getHours().toString().padStart(2, '0')}:` +
        `${ahora.getMinutes().toString().padStart(2, '0')}:` +
        `${ahora.getSeconds().toString().padStart(2, '0')}`;
}

// Actualización al segudndo
document.addEventListener('DOMContentLoaded', () => {
    actualizarFechaHora();
    setInterval(actualizarFechaHora, 1000);
});