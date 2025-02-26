function obterValorUnitario(produto) {
  switch (produto) {
    case 'jornais':
      return 10.0;
    case 'revistas':
      return 20.0;
    case 'livros':
      return 30.0;
    case 'discos':
      return 40.0;
    default:
      alert('Produto inválido!');
      return null;
  }
}

// Função para obter a quantidade desejada do usuário
const obterQuantidade = function () {
  const quantidade = prompt('Digite a quantidade desejada:');
  if (quantidade === null) {
    alert('Operação cancelada.');
    return null;
  }
  let numero = parseInt(quantidade);
  if (isNaN(numero) || numero <= 0) {
    alert('Quantidade inválida! Insira um número positivo.');
    return null;
  }
  return numero;
};

function calcularTotal(produto, quantidade) {
  let valorUnitario = obterValorUnitario(produto);

  // prettier-ignore
  if ((valorUnitario === null) || (quantidade === null)) {
      return null;
    }
  return valorUnitario * quantidade;
}

// Função para realizar o cálculo e chamar um callback para processar o resultado
function realizarCalculoCompra(callback) {
  let produtoSelect = document.getElementById('produto');

  if (!(produtoSelect instanceof HTMLSelectElement)) {
    alert('Erro ao obter o tipo de produto.');
    return;
  }

  let produto = produtoSelect.value;
  let quantidade = obterQuantidade();
  let total = calcularTotal(produto, quantidade);

  callback(total);
}

// Função para atualizar o resultado no DOM (callback)
function exibirResultado(valorTotal) {
  let saida = document.getElementById('resultadoCompra');

  if (saida instanceof HTMLElement) {
    if (valorTotal === null) {
      saida.textContent = 'Total: Operação não realizada.';
      return;
    }
    saida.textContent = `Total: R$ ${valorTotal.toFixed(2)}`;
  }
}

// Adiciona o evento ao botão
document.addEventListener('DOMContentLoaded', function () {
  let botaoCalcular = document.getElementById('calcularCompra');

  if (botaoCalcular instanceof HTMLButtonElement) {
    botaoCalcular.addEventListener('click', function () {
      realizarCalculoCompra(exibirResultado); // Passa a função callback
    });
  }
});
