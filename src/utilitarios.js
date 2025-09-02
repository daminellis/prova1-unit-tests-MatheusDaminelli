class Utilitarios {

    // feito
    inverterString(str) {
      return str.split("").reverse().join("");
    }
    // feito
    contarCaracteres(str) {
      return str.length;
    }
    // feito
    paraMaiusculas(str) {
      return str.toUpperCase();
    }
    // feito
    paraMinusculas(str) {
      return str.toLowerCase();
    }
    // feito
    primeiraLetraMaiuscula(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    // feito
    somar(a, b) {
      return a + b;
    }
    // feito
    subtrair(a, b) {
      return a - b;
    }
    // feito
    multiplicar(a, b) {
      return a * b;
    }
    // feito
    dividir(a, b) {
      if (b === 0) throw new Error("Divisão por zero");
      return a / b;
    }
    // feito
    ehPar(num) {
      return num % 2 === 0;
    }
    // feito
    primeiroElemento(arr) {
      return arr[0];
    }
    // feito
    ultimoElemento(arr) {
      return arr[arr.length - 1];
    }
    // feito
    tamanhoArray(arr) {
      return arr.length;
    }
    // feito
    ordenarArray(arr) {
      return [...arr].sort();
    }
    // feito
    inverterArray(arr) {
      return [...arr].reverse();
    }

    gerarNumeroAleatorio(max = 100) {
      return Math.floor(Math.random() * max);
    }
    // feito
    ehNumero(valor) {
      return typeof valor === "number" && !isNaN(valor);
    }
    // feito
    removerEspacos(str) {
      return str.trim();
    }
    // feito
    repetirTexto(str, vezes) {
      return str.repeat(vezes);
    }
    // feito
    juntarArray(arr, separador = ",") {
      return arr.join(separador);
    }
    // feito
    contarPalavras(str) {
      return str.trim().split(/\s+/).length;
    }
    // feito
    mediaArray(arr) {
      if (!arr.length) return 0;
      return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
    // feito
    removerDuplicados(arr) {
      return [...new Set(arr)];
    }
    
    ehPalindromo(str) {
      const limpo = str.toLowerCase().replace(/[\W_]/g, "");
      return limpo === limpo.split("").reverse().join("");
    }
  
    mesclarObjetos(obj1, obj2) {
      return { ...obj1, ...obj2 };
    }
  }
  
  module.exports = Utilitarios;