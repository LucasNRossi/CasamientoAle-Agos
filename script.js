document.addEventListener("DOMContentLoaded", function () {
  // Obtiene el contenedor del contador y los elementos para cada sección del tiempo
  const contador = document.querySelector(".contador");
  const dias = document.getElementById("dias");
  const horas = document.getElementById("horas");
  const minutos = document.getElementById("minutos");
  const segundos = document.getElementById("segundos");

  // Fecha y hora del evento
  const fechaEvento = new Date("April 27, 2024 19:00:00").getTime();

  // Actualiza el contador cada segundo
  const x = setInterval(function () {
    // Fecha y hora actuales
    const ahora = new Date().getTime();

    // Calcula la diferencia entre la fecha del evento y la fecha actual
    const diferencia = fechaEvento - ahora;

    // Calcula días, horas, minutos y segundos restantes
    const diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horasRestantes = Math.floor(
      (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutosRestantes = Math.floor(
      (diferencia % (1000 * 60 * 60)) / (1000 * 60)
    );
    const segundosRestantes = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualiza el contenido de los elementos correspondientes en el HTML
    dias.textContent = diasRestantes;
    horas.textContent = horasRestantes;
    minutos.textContent = minutosRestantes;
    segundos.textContent = segundosRestantes;

    // Si el tiempo ha terminado, muestra un mensaje
    if (diferencia < 0) {
      clearInterval(x);
      contador.innerHTML = "<span>¡El evento ha comenzado!</span>";
    }
  }, 1000);
});
