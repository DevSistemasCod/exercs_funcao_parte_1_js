let calcularQuadrado = function (lado) {
  return lado * lado;
};

let calcularRetangulo = function (largura, altura) {
  return largura * altura;
};

let calcularTrapezio = function (baseMaior, baseMenor, altura) {
  return ((baseMaior + baseMenor) * altura) / 2;
};

let calcularTriangulo = function (base, altura) {
  return (base * altura) / 2;
};

let calcularCirculo = function (raio) {
  return Math.PI * (raio * raio);
};

function obterValor(mensagem) {
  const valor = prompt(mensagem);
  if (valor === null) {
    alert('Operação cancelada pelo usuário.');
    return null;
  }
  let numero = parseFloat(valor);
  if (isNaN(numero)) {
    alert('Valor inválido! Insira um número.');
    return null;
  }
  return numero;
}

const solicitarDados = function (figura) {
  let lado, largura, altura, baseMaior, baseMenor, base, raio;
  //prettier-ignore
  if (figura === 'quadrado') {
    lado = obterValor('Digite o lado do quadrado:');
    if (lado === null) {
      return null;
    }
    return { lado };
  }
  //prettier-ignore
  else if ( figura === 'retangulo' ) {
    largura = obterValor('Digite a largura do retângulo:');
    if (largura === null) {
      return null;
    }
    altura = obterValor('Digite a altura do retângulo:');
    if (altura === null) {
      return null;
    }
    return { largura, altura };
  }
  //prettier-ignore
  else if (figura === 'trapezio') {
    baseMaior = obterValor('Digite a base maior do trapézio:');
    if (baseMaior === null) {
      return null;
    }
    baseMenor = obterValor('Digite a base menor do trapézio:');
    if (baseMenor === null) {
      return null;
    }
    altura = obterValor('Digite a altura do trapézio:');
    if (altura === null){
      return null;
    } 

    return { baseMaior, baseMenor, altura };
  }
  //prettier-ignore
  else if (figura === 'triangulo') {
    base = obterValor('Digite a base do triângulo:');
    if (base === null){
      return null;
    } 

    altura = obterValor('Digite a altura do triângulo:');
    if (altura === null){
      return null;
    } 

    return { base, altura };
  } 
  //prettier-ignore
  else if (figura === 'circulo') {
    raio = obterValor('Digite o raio do círculo:');
    if (raio === null){
      return null;
    } 
    return { raio };
  } 
  
  else {
    alert('Seleção inválida!');
    return null;
  }
};

function calcularArea(figura, callback) {
  const dados = solicitarDados(figura);

  if (!dados) {
    return null; // Retorna null se os dados forem inválidos ou a operação for cancelada
  }

  let resultado;

  switch (figura) {
    case 'quadrado':
      resultado = callback(dados.lado);
      break;
    case 'retangulo':
      resultado = callback(dados.largura, dados.altura);
      break;
    case 'trapezio':
      resultado = callback(dados.baseMaior, dados.baseMenor, dados.altura);
      break;
    case 'triangulo':
      resultado = callback(dados.base, dados.altura);
      break;
    case 'circulo':
      resultado = callback(dados.raio);
      break;
    default:
      alert('Erro ao calcular área!');
      return null;
  }

  return resultado;
}

function atualizarResultadoDOM(resultado) {
  if (resultado === null) {
    alert('Nenhum cálculo realizado.');
    return;
  }

  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLElement) {
    saida.textContent = 'Área: ' + resultado.toFixed(2);
  }
}

// Adiciona o evento ao botão
function configurarEventoFigura() {
  let figuraEscolhida = document.getElementById('figuraGeo');

  if (figuraEscolhida instanceof HTMLSelectElement) {
    figuraEscolhida.addEventListener('click', realizarCalculo); // Função anônima usada como callback
  }
}

const realizarCalculo = function () {
  let figuraEscolhida = document.getElementById('figuraGeo');

  if (!(figuraEscolhida instanceof HTMLSelectElement)) {
    alert('O elemento não é um seletor válido.');
    return;
  }

  let figura = figuraEscolhida.value;
  let resultado = null;

  switch (figura) {
    case 'quadrado':
      resultado = calcularArea(figura, calcularQuadrado);
      break;
    case 'retangulo':
      resultado = calcularArea(figura, calcularRetangulo);
      break;
    case 'trapezio':
      resultado = calcularArea(figura, calcularTrapezio);
      break;
    case 'triangulo':
      resultado = calcularArea(figura, calcularTriangulo);
      break;
    case 'circulo':
      resultado = calcularArea(figura, calcularCirculo);
      break;
    default:
      alert('Opção inválida!');
      return;
  }

  atualizarResultadoDOM(resultado);
};

document.addEventListener('DOMContentLoaded', configurarEventoFigura);
