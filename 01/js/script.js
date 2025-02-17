// Função para pegar os números dos inputs
function obterNumeros() {
  let entradaNum1 = document.getElementById('num1');
  let entradaNum2 = document.getElementById('num2');

  //prettier-ignore
  if ((entradaNum1 instanceof HTMLInputElement) && (entradaNum2 instanceof HTMLInputElement)) {
    let num1 = parseInt(entradaNum1.value);
    let num2 = +(entradaNum2.value);
    
    return { num1, num2 };
  }
  return { num1: 0, num2: 0 }; // Retorna valores padrão se houver erro
}

function exibirResultado(resultado) {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLElement) {
    saida.textContent = resultado;
  }
}

// Função para somar
const somar = function (a, b) {
  return a + b;
};

// Função para subtrair
const subtrair = function (a, b) {
  return a - b;
};

// Função para multiplicar
const multiplicar = function (a, b) {
  return a * b;
};

// Função para dividir
const dividir = function (a, b) {
  if (b === 0) {
    return 'Erro: Divisão por zero!';
  }
  return a / b;
};

function calcular(operacao) {
  let numeros = obterNumeros(); // Chamada da função e armazenamento do retorno
  let num1 = numeros.num1;      // Atribuição explícita para num1
  let num2 = numeros.num2;      // Atribuição explícita para num2
  //let {num1, num2} = obterNumeros();  
  let resultado;

  switch (operacao) {
    case 'soma':
      resultado = somar(num1, num2);
      break;
    case 'subtracao':
      resultado = subtrair(num1, num2);
      break;
    case 'multiplicacao':
      resultado = multiplicar(num1, num2);
      break;
    case 'divisao':
      resultado = dividir(num1, num2);
      break;
    default:
      resultado = 'Operação inválida!';
  }

  exibirResultado(resultado);
}
