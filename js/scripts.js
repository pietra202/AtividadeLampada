let led = "ligar";

const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let lampada = document.getElementById("lampada");
  if (led == "ligar") {
    imgLampada.src ="./img/acesa.jpg";
    imgLampada.alt ="lampada acesa.";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    imgLampada.src = "./img/apagada.jpg";
    imgLampada.alt = "lampada apagada.";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};


const Ligar =() => {
};

const gerarfigura = () => {
  let gerarfigura= document.getElementById
  ("ixabxjsbc").value;

  console.log(bchdbcjd);

  document.getElementById("canvas").innerHTML
  `<img class "imagem" srt= https://www.google.com/url?sa=i&url
  =https%3A%2F%2Fwww.facebook.com%2Fsenaigrafica%2F%3Flocale%3Dpt_BR&psig=AOvVaw330a4ugHSFBufja55VmYms&ust
  =1711561823870000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiE2ua-koUDFQAAAAAdAAAAABAE`
};

//--------------------------------------------------------------------------

const calcular = () => {
  let inValorPedido = document.getElementById("inValorPedido")
  let inPercDesc = document.getElementById("inPercDesc")
  let inValDesc = document.getElementById("inValDesc")
  let inValFinal = document.getElementById("inValFinal")
  
  if (inValorPedido.value >= 2000 ){
    inPercDesc.value = 1.5
    inValDesc.value = inValorPedido.value * 1.5/100
    inValFinal.value = inValorPedido.value - inValDesc.value
   } else if (inValorPedido.value >= 1500 ){
    inPercDesc.value = 1
    inValDesc.value = inValorPedido.value * 1/100
    inValFinal.value = inValorPedido.value - inValDesc.value
   } else if (inValorPedido.value >= 1000 ){
    inPercDesc.value = 0.8
    inValDesc.value = inValorPedido.value * 0.8/100
    inValFinal.value = inValorPedido.value - inValDesc.value
  }else if (inValorPedido.value >= 500 ){
    inPercDesc.value = 0.5
    inValDesc.value = inValorPedido.value * 0.5/100
    inValFinal.value = inValorPedido.value - inValDesc.value
  }
  console.log(inValorPedido.value);
  };

//------------------------------------------------------------------

  document.getElementById("mensagem-erro").style.display = "none";
const validaForm = () => {
  let inData = document.getElementById("inData").value;
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inProd = document.getElementById("inProd").value;
  let inQtd = document.getElementById("inQtd").value;
  let inVal = document.getElementById("inVal").value;
  let msgErro = document.getElementById("mensagem-erro");

  //apagando as informações de erro
  msgErro.innerText = "";

  //validação dos dados
  inData == "" && (msgErro.innerHTML += "data invalida<br>");
  inCli == "" && (msgErro.innerHTML += "Nome do cliente invalido <br>");
  inCli.lenght < 3 && (msgErro.innerHTML += "Nome do cliente invalido <br>");
  inFone == "" && (msgErro.innerHTML += "Telefone invalido <br>");
  inMail == "" && (msgErro.innerHTML += "Email invalido <br>");
  inMail.lenght < 6 && (msgErro.innerHTML += "Email invalido <br>");
  inProd == "" && (msgErro.innerHTML += "Produto invalido <br>");
  inProd.lenght < 6 && (msgErro.innerHTML += "Produto invalida <br>")
  inQtd == "" && (msgErro.innerHTML += "Quantidade invalida <br>");
  inQtd < 0 && (msgErro.innerHTML += "Quantidade invalida <br>");
  inVal == "" && (msgErro.innerHTML += "Valor unitário invalido<br>");
  inVal < 0 && (msgErro.innerHTML += "Valor unitário invalido<br>");

  //mostrar | ocultar erro
  msgErro.innerText == ""
    ? (msgErro.style.display = "none")
    : (msgErro.style.display = "block"),msgErro.className.replace("violet" + "");

    msgErro.innerText == "enviado!" &&
    ((msgErro.style.display = "block"),
    (msgErro.innerText = "Formulário enviado com sucesso!"),
    (msgErro.classList.add("violet"));
};


//-----------------------------------------------------

