let raizQuadrada = function (numero) {
  return Math.sqrt(numero);
};

// Função para calcular o exponencial
//lembre potencia não é exponencial para potencia use a pow()
let exponencial = function (numero) {
  return Math.exp(numero).toFixed(2);
};

function calcular() {
  let entradaNum = document.getElementById('numeroInput');
  let resultadoRaiz, resultadoExponencial;

  if (entradaNum instanceof HTMLInputElement) {
    let numero = parseFloat(entradaNum.value);

    // Calcula a raiz e o exponencial usando as funções anônimas
    resultadoRaiz = raizQuadrada(numero);
    resultadoExponencial = exponencial(numero);

    return { resultadoRaiz, resultadoExponencial };
  }
  return { resultadoRaiz: 0, resultadoExponencial: 0 };
}

function obterConteudo() {
  let resExponencial = calcular().resultadoExponencial;
  let resRaiz = calcular().resultadoRaiz;

  let saidaExp = document.getElementById('resultadoExponencial');
  let saidaRaiz = document.getElementById('resultadoRaiz');

  //prettier-ignore
  if((saidaExp instanceof HTMLElement) && (saidaRaiz instanceof HTMLElement)){
    saidaExp.textContent = "Raiz: " + String(resExponencial);
    saidaRaiz.textContent = "Exponencial: " + String(resRaiz);
  }
}

function iniciar() {
  let exibirBtn = document.getElementById('calcularBtn');
  if (exibirBtn instanceof HTMLButtonElement) {
    exibirBtn.addEventListener('click', obterConteudo);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
