let votosWeb = 0;
let votosJS = 0;
let votosBD = 0;
let totalVotos = 0;

function votar(opcion) {
  if (opcion === 'web') {
    votosWeb++;
    document.getElementById('votos-web').textContent = votosWeb;
  } else if (opcion === 'js') {
    votosJS++;
    document.getElementById('votos-js').textContent = votosJS;
  } else if (opcion === 'bd') {
    votosBD++;
    document.getElementById('votos-bd').textContent = votosBD;
  }

  totalVotos++;
  alert("¡Gracias por tu voto!");

  if (totalVotos % 5 === 0) {
    console.log(`Total acumulado de votos: ${totalVotos}`);
  }
}

