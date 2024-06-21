const peso = 1.0;
console.log(Number.isInteger(peso1)); //Retorna um booleano dizendo se o número é um inteiro

const saldo = Number("2.1"); //Retorna a string passada como number
console.log(saldo);

const numero = 13.4820;
const fixedTwoDecimals = numero.toFixed(2); //Retorna número com um número de casas decimais
console.log("\nNúmero com duas casas decimais:", fixedTwoDecimals);
const toFixedSemVariavel = ((10.345).toFixed(2)) //Sem os parenteses não funciona

const myNumber = 14.2498; 
const numberString = myNumber.toString(); //Transformar número para string
console.log("Número transformado em string: ", typeof numberString);