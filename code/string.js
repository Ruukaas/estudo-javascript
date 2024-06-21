const heroi = "Himmel"
console.log(heroi.charAt(2)) //Retorna a letra da string da posição passada

const sobrenome = "Henrique"
console.log(escola.charCodeAt(3)) //Retorna o unicode da letra da string da posição passada
 
const personagem = "Neo"
console.log(escola.indexOf("1")) //Retorna a posição na string da letra passada

const text = 'livro';
const textSize = text.length; //Retorna o tamanho de uma string
const textSize2 = 'livro'.length; //Retorna o tamanho de uma string

const splittedText = "jornais".split("n"); // Retorna um array quebrando a string por um delimitador
console.log(
  "\nArray com as posiçòes separadas pelo delimitador: ",
  splittedText
); 

const replacedText = "Texto".replace("Text", "txeT"); //Busca um valor e substitui pelo outro
console.log("\nSubstituição de valor:", replacedText);
const replaced = "Texto".replace(3, "Xis") //Passando a posição que quer ser substituída

const lastChar = "Paralelepipedo".slice(-1); //Retorna a fatia de um valor. Se você passar o -1 como argumento ele retorna o último caractere. Passa o começo e o fim
console.log("\nÚltima letra de uma string:", lastChar);
const allWithoutLastChar = "Paralelepipedo".slice(0, -1);
console.log(
  "\nValor da string da primeira letra menos a última:",
  allWithoutLastChar
);

const secondToEnd = "Texto".slice(1);
console.log("\nValor da string da segunda letra até a última:", secondToEnd);