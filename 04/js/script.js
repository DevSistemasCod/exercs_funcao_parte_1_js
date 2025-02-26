function inverterNumero(numero, callback) {
  return callback(numero); // Aplica o callback ao número e retorna o resultado
}

const inverter = function (numero) {
  return numero.toString().split('').reverse().join(''); // Inverte o número
};

function exibirNumeroInvertido() {
  let entrada = document.getElementById('numeroInput');

  if (entrada instanceof HTMLInputElement) {
    let numeroInput = Number(entrada.value);
    let resultado = inverterNumero(numeroInput, inverter);
    let saida = document.getElementById('resultado');

    if (saida instanceof HTMLElement) {
      saida.textContent = 'Resultado: ' + resultado;
    }
  }
}

function iniciar() {
  let exibirBtn = document.getElementById('inverterNumeroBtn');

  if (exibirBtn != null) {
    exibirBtn.addEventListener('click', exibirNumeroInvertido);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
