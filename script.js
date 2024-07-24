document.getElementById('calculationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const monto = parseFloat(document.getElementById('monto').value);
  const fecha = document.getElementById('fecha').value;
  const tipoCredito = document.getElementById('tipoCredito').value;
  const plazo = parseInt(document.getElementById('plazo').value);

  const idi = 0.17860010; // IDI para 23-07-2024
  const idiFecha = "23-07-2024";

  // Calcular UVC
  const uvc = monto / idi;
  document.getElementById('uvcResult').innerText = uvc.toFixed(2);

  // Mostrar IDI y su fecha
  document.getElementById('idiFecha').innerText = idiFecha;
  document.getElementById('idiValor').innerText = idi.toFixed(8);

  // Calcular Intereses
  let tasaInteres;
  if (tipoCredito === 'comercial' || tipoCredito === 'microcredito') {
      tasaInteres = 8; // Tasa mínima para comerciales y microcréditos
  } else {
      tasaInteres = 6; // Tasa para moneda nacional
  }

  const intereses = monto * (tasaInteres / 100) * (plazo / 12);
  document.getElementById('interestResult').innerText = intereses.toFixed(2);
});

document.getElementById('resetButton').addEventListener('click', function() {
  // Reiniciar los valores del formulario
  document.getElementById('calculationForm').reset();

  // Limpiar los resultados mostrados
  document.getElementById('idiFecha').innerText = '';
  document.getElementById('idiValor').innerText = '';
  document.getElementById('uvcResult').innerText = '';
  document.getElementById('interestResult').innerText = '';
});