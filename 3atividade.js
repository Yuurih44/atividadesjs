// Exercício 1: Exibição de Lista de Livros
const livrosLista = ['O Hobbit', 'Dom Casmurro', '1984', 'Orgulho e Preconceito', 'O Alquimista'];

for (let i = 0; i < livrosLista.length; i++) {
    console.log(livrosLista[i]);
}

// Exercício 2: Tabuada de Adição
const numeroAdicao = 5;

for (let i = 0; i <= 10; i++) {
    console.log(`${numeroAdicao} + ${i} = ${numeroAdicao + i}`);
}

// Exercício 3: Calculadora de Média de Alturas
const prompt1 = require('prompt-sync')();
let alturas = [];

for (let i = 0; i < 4; i++) {
    let altura = parseFloat(prompt1(`Digite a altura ${i + 1} em metros: `));
    alturas.push(altura);
}

let somaAlturas = alturas.reduce((a, b) => a + b, 0);
let mediaAlturas = somaAlturas / alturas.length;
console.log(`A média das alturas é: ${mediaAlturas.toFixed(2)} m`);

// Exercício 4: Contagem Progressiva
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Exercício 5: Verificação de Número Ímpar
for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Exercício 6: Lista de Compras
let listaDeCompras = ["arroz", "feijão", "açúcar", "óleo", "sal", "café"];

for (let i = 0; i < listaDeCompras.length; i++) {
    console.log(listaDeCompras[i]);
}

// Exercício 7: Soma dos Números Ímpares de 1 a M
const prompt2 = require('prompt-sync')();
let numeroMaximo = parseFloat(prompt2("Digite um número: "));
let somaImpares = 0;

for (let i = 1; i <= numeroMaximo; i++) {
    if (i % 2 !== 0) somaImpares += i;
}
console.log(`A soma dos números ímpares de 1 até ${numeroMaximo} é: ${somaImpares}`);

// Exercício 8: Quadrado de um Número
const prompt3 = require('prompt-sync')();
let numeroQuadrado = parseInt(prompt3('Digite um número para calcular seu quadrado: '));
console.log(`O quadrado de ${numeroQuadrado} é: ${numeroQuadrado ** 2}`);

// Exercício 9: Contagem de Consoantes em uma Palavra
const prompt4 = require('prompt-sync')();
let palavraConsoantes = prompt4("Digite uma palavra: ");
let consoantes = "bcdfghjklmnpqrstvwxyz";

for (let i = 0; i < palavraConsoantes.length; i++) {
    if (consoantes.includes(palavraConsoantes[i].toLowerCase())) {
        console.log(`A palavra "${palavraConsoantes}" tem a consoante: ${palavraConsoantes[i]}`);
    }
}

// Exercício 10: Multiplicação de Array por 3
const prompt5 = require('prompt-sync')();
let numerosArrayMultiplicar = [];

for (let i = 0; i < 4; i++) {
    numerosArrayMultiplicar.push(parseInt(prompt5(`Digite o ${i + 1}º número: `)));
}

for (let i = 0; i < numerosArrayMultiplicar.length; i++) {
    console.log(`${numerosArrayMultiplicar[i]} x 3 = ${numerosArrayMultiplicar[i] * 3}`);
}

// Exercício 11: Inversão de Frase
const prompt6 = require('prompt-sync')();
let fraseInput = prompt6('Digite uma frase: ');
let fraseInvertida = fraseInput.split('').reverse().join('');
console.log(`A frase invertida é: "${fraseInvertida}"`);

// Exercício 12: Soma de Números Ímpares em um Intervalo
const prompt7 = require('prompt-sync')();
let inicioIntervalo = parseInt(prompt7('Digite o número inicial do intervalo: '));
let fimIntervalo = parseInt(prompt7('Digite o número final do intervalo: '));
let somaImparesIntervalo = 0;

for (let i = inicioIntervalo; i <= fimIntervalo; i++) {
    if (i % 2 !== 0) {
        somaImparesIntervalo += i;
    }
}

console.log(`A soma dos números ímpares no intervalo de ${inicioIntervalo} a ${fimIntervalo} é: ${somaImparesIntervalo}`);

// Exercício 13: Contagem de Palavras em um Texto
const prompt8 = require('prompt-sync')();
let textoDigitado = prompt8('Digite um texto: ');
let palavrasTexto = textoDigitado.split(' ').length;
console.log(`O texto contém ${palavrasTexto} palavras.`);

// Exercício 14: Lista de Dias da Semana
let diasSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

for (let i = 0; i < diasSemana.length; i++) {
    console.log(diasSemana[i]);
}

// Exercício 15: Cálculo de Cubos
const prompt9 = require('prompt-sync')();
let numeroCubos = parseInt(prompt9('Digite um número: '));

for (let i = 1; i <= 5; i++) {
    console.log(`${numeroCubos} elevado ao cubo é: ${Math.pow(numeroCubos, 3)}`);
}

// Exercício 16: Criação de Array de Múltiplos
const prompt10 = require('prompt-sync')();
let limiteMultiplos = parseInt(prompt10('Digite um número limite: '));
let multiplosArray = [];

for (let i = 1; i <= limiteMultiplos; i++) {
    multiplosArray.push(i * 3);
}

console.log(`Os múltiplos de 3 até ${limiteMultiplos} são: ${multiplosArray}`);

// Exercício 17: Impressão de Padrão Numérico
const linhasNumeros = 5; 
for (let i = 1; i <= linhasNumeros; i++) {
    let numeros = '';
    for (let j = 1; j <= i; j++) {
        numeros += `${j} `;
    }
    console.log(numeros);
}

// Exercício 18: Calculadora de Média Simples
const prompt11 = require('prompt-sync')();
let valores = [];
for (let i = 1; i <= 3; i++) {
    let valor = parseFloat(prompt11(`Digite o valor ${i}: `));
    valores.push(valor);
}
let somaValores = valores.reduce((a, b) => a + b, 0);
console.log(`A média dos valores é: ${(somaValores / valores.length).toFixed(2)}`);
