function tabuada() {
  let num = parseFloat(document.getElementById("numero").value);
  let selTabuada = "";
  let resposta = document.getElementById("resposta");
  let tabuada = "";
  
  if (isNaN(num)) {
    alert("Digite um número !!!");
    return;
  }

  let Contas = document.getElementsByName("Contas");

  for (let i = 0; i < Contas.length; i++) {
    if (Contas[i].checked) {
      selTabuada = parseInt(Contas[i].value);
    }
  }
  
  if (selTabuada === 1)
    for (let count = 1; count <= 10; count++) {
      tabuada +=
        "<b>" +
        count +
        " + " +
        num +
        " = " +
        (num + count) +
        "</b><br /><br />";
      resposta.innerHTML = tabuada;
      
    }
  if (selTabuada === 2)
    for (let count = 1; count <= 10; count++) {
      let sub = count + num;
      tabuada +=
        "<b>" +
        sub +
        " - " +
        num +
        " = " +
        (count + num - num) +
        "</b><br /><br />";
      resposta.innerHTML = tabuada;
    }
  if (selTabuada === 3)
    for (let count = 1; count <= 10; count++) {
      tabuada +=
        "<b>" + num + " x " + count + " = " + num * count + "</b><br /><br />";
      resposta.innerHTML = tabuada;
    }
  if (selTabuada === 4)
    for (let count = 1; count <= 10; count++) {
      let div = num * count;
      tabuada +=
        "<b>" + div + " &#247; " + num + " = " + div / num + "</b><br /><br />";
      resposta.innerHTML = tabuada;
    }

    if (selTabuada === "") 
      alert('Selecione uma operação !!!');
}

function pratica() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = parseFloat(document.getElementById("result").value);
  let resultado = document.getElementById("resultado");
  let selTabuada = "";
  let operacao = document.getElementById("operacao");

  let tabuada = "";

  if (isNaN(num1) || isNaN(num2)) {
    alert("Digite um número !!!");
    return;
  }

  let Contas = document.getElementsByName("Contas");
  for (let i = 0; i < Contas.length; i++) {
    if (Contas[i].checked) {
      selTabuada = parseInt(Contas[i].value);     
    }
  }
  if (selTabuada == "") {
    alert("Selecione uma operação !!!");
    return;
  }
 
  if (selTabuada === 1) {    
    operacao.innerHTML = "+"
    tabuada =
      "<b>" + num1 + " + " + num2 + " = " + (num1 + num2) + "</b><br /><br />";
    resultado.innerHTML = tabuada;
    
    if (result == num1 + num2) {
      resultado.innerHTML = "Parabéns, você acertou a ADIÇÃO!!!";      
      srcImage("img/acertou.jpg");
    } else {
      resultado.innerHTML = "Tente novamente, você errou a ADIÇÃO!!!";
      srcImage("img/errou.jpg");
    }
  }
  if (selTabuada === 2) {
    
    operacao.innerHTML = "-"
    tabuada =
      "<b>" +
      num1 +
      " - " +
      num2 +
      " = " +
      (num1 - num2) * -1 +
      "</b><br /><br />";
    resultado.innerHTML = tabuada;
    console.log(tabuada);
    if (result == num1 - num2) {
      resultado.innerHTML = "Parabéns, você acertou a SUBTRAÇÃO!!!";
      srcImage("img/acertou.jpg");
    } else {
      resultado.innerHTML = "Tente novamente, você errou a SUBTRAÇÃO!!!";
      srcImage("img/errou.jpg");
    }
  }
  if (selTabuada === 3) {
    operacao.innerHTML = "X"
    tabuada =
      "<b>" + num1 + " x " + num2 + " = " + num1 * num2 + "</b><br /><br />";
    resultado.innerHTML = tabuada;
    if (result == num1 * num2) {
      resultado.innerHTML = "Parabéns, você acertou a MULTIPLICAÇÃO!!!";
      srcImage("img/acertou.jpg");
    } else {
      resultado.innerHTML = "Tente novamente, você errou a MULTIPLICAÇÃO!!!";
      srcImage("img/errou.jpg");
    }
  }
  if (selTabuada === 4) {
    operacao.innerHTML = " &#247; "
    
    tabuada =
      "<b>" +
      num1 +
      " / " +
      num2 +
      " = " +
      (num1 / num2).toFixed(2) +
      "</b><br /><br />";
    resultado.innerHTML = tabuada;
    if (result == num1 / num2) {
      resultado.innerHTML = "Parabéns, você acertou a DIVISÃO!!!";
      
      srcImage("img/acertou.jpg");
    } else {
      resultado.innerHTML = "Tente novamente, você errou a DIVISÃO!!!";
      srcImage("img/errou.jpg");
    }
  }
}

function GFG_click(clicked) {
  let selTabauda = document.getElementById('id');
  alert("Teste " + selTabauda);
  return selTabauda;
}

function srcImage(srcImg) {
  let img = document.createElement("img");
  img.src = srcImg;
  let src = document.getElementById("imagem");
  src.appendChild(img);
}
