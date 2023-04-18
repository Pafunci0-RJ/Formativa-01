/*******************************************
 * Atividade 1
 *******************************************/

function validarDados() {
  var campos = ["inData", "inCli", "inFone", "inMail", "inProd"];
  var mensagens = ["Data", "Nome do cliente", "Telefone", "E-mail", "Nome do produto", "Quantidade", "Valor unitário"];

  document.getElementById("mensagem-erro").style.display = "block";

  for (var i = 0; i < campos.length; i++) {
    var campo = document.getElementById(campos[i]);
    if (campo.value == "") {
      document.getElementById("mensagem-erro").innerHTML = "Por favor, preencha o campo " + mensagens[i] + ".";
      return false;
    } else if (campo.value.length < 5) {
      document.getElementById("mensagem-erro").innerHTML = "O campo " + mensagens[i] + " deve ter pelo menos 5 caracteres.";
      return false;
    }
  }

  var quantidade = document.getElementById("inQtd").value;
  var valor = document.getElementById("inVal").value;
  if (quantidade < 0 || valor < 0) {
    document.getElementById("mensagem-erro").innerHTML = "Não pode número negativo!!!";
    return false;
  }

  document.getElementById("frmRegistro").submit();
  return true;
}

/*******************************************
* Atividade 2
*******************************************/

function atualizarDados() {
  let canvas = document.getElementById('canvas');
  let qtd = document.getElementById('inQtdImg');
  let elemento = '<img src="img/images.jpg">';
  canvas.innerHTML = '';
  console.log(qtd)
  console.log(elemento)
  for (let i = 0; i < qtd.value; i++) {
    canvas.innerHTML += elemento;
  }
}

/*******************************************
* Atividade 3
*******************************************/

function botaoAcender() {
  let imagem = document.getElementById('lampada');
  let caminho = imagem.src;
  let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);

  if (arquivo == 'acesa.jpg' || arquivo == '')
    imagem.src = 'img/apagada.jpg';
  else
    imagem.src = 'img/acesa.jpg';
}

/*******************************************
* Atividade 4
*******************************************/

function calcular() {
  var valor = document.getElementById('inValorPedido').value;
  var perc = document.getElementById('inPercDesc').value;
  var desc = document.getElementById('inValDesc').value;
  var valorL = document.getElementById('inValFinal').value;

  if (valor <= 500) {
      document.getElementById('inPercDesc').value = 0.5;
      document.getElementById('inValFinal').value = valor - (document.getElementById('inValDesc').value = (0.5 * valor) / 100);
  }

  if (valor < 0)
      alert('Somente valores positivos!'); {
      let valordesc = document.getElementById('inValDesc').value;
      let valor2 = valor - valordesc;
      var valorL = document.getElementById('inValFinal').value = valor2
  }

  if (valor > 500 && valor <= 1000) {
      document.getElementById('inPercDesc').value = 0.8;
      document.getElementById('inValFinal').value = valor - (document.getElementById('inValDesc').value = (0.8 * valor) / 100);
  }
  if (valor > 1000 && valor <= 1500) {
      document.getElementById('inPercDesc').value = 1.0;
      document.getElementById('inValFinal').value = valor - (document.getElementById('inValDesc').value = (1.0 * valor) / 100);
  }
  if (valor > 1500 && valor <= 2000) {
      document.getElementById('inPercDesc').value = 1.5;
      document.getElementById('inValFinal').value = valor - (document.getElementById('inValDesc').value = (1.5 * valor) / 100);
  }}