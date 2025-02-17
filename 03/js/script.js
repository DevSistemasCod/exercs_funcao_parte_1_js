function transformarTexto(texto, callback) {
  return callback(texto);
}

// Função callback para transformar a string em maiúsculas
const paraMaiusculas = function (texto) {
  return texto.toUpperCase();
};

function exibirConteudo() {
  let entradaTexto = document.getElementById('textoInput');

  if (entradaTexto instanceof HTMLInputElement) {
    let textoInput = entradaTexto.value;
    let resultado = transformarTexto(textoInput, paraMaiusculas);
    let saida = document.getElementById('resultado');

    if (saida instanceof HTMLElement) {
      saida.textContent = 'Resultado: ' + resultado;
    }
  }
}
