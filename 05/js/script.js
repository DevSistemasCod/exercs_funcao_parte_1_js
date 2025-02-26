// Função anônima para contar vogais
let contarVogais = function (minhaString) {
  let vogais = 'aeiouáéíóúâêîôûãõàèìòù';
  let contador = 0;

  // Itera sobre cada caractere da string e verifica se é uma vogal
  for (const char of minhaString.toLowerCase()) {
    if (vogais.includes(char)) {
      contador++;
    }
  }
  return contador;
};

function iniciar() {
  let btnContar = document.getElementById('btnContar');

  if (btnContar instanceof HTMLButtonElement) {
    btnContar.addEventListener('click', function () {
      let entrada = document.getElementById('inputString');

      if (entrada instanceof HTMLInputElement) {
        let inputString = entrada.value;

        let saida = document.getElementById('resultado');
        if (saida instanceof HTMLElement) {
          let resultado = contarVogais(inputString);
          saida.textContent = 'Resultado: ' + String(resultado);
        }
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
