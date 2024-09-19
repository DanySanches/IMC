function calcularImc() {
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;

  altura = parseFloat(altura) / 100;
  peso = parseFloat(peso);

  let valores = [altura, peso]

  let imc = (...args) => (args[1] / Math.pow(args[0], 2)).toFixed(2);
  let resultadoIMC = imc(valores);

  let tabela =
    resultadoIMC < 18.5
      ? "Você está abaixo do peso"
      : resultadoIMC >= 18.5 && resultadoIMC < 25.0
      ? "Seu peso está normal"
      : resultadoIMC >= 25.01 && resultadoIMC < 30.0
      ? "Você está com sobrepeso"
      : resultadoIMC >= 30 && resultadoIMC < 35
      ? "Você está com obesidade grau 1"
      : "Você está com obesidade grau 2";

  document.getElementById(
    "resultado"
  ).innerHTML = `O Seu resultado foi ${resultadoIMC}, ${tabela}`;


}
