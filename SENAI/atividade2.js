// **Exercício 1: Cadastro de Estudantes**
const prompt = require('prompt-sync')();

let listaEstudantes = [];
let continuarCadastro;

do {
    let nomeAluno = prompt("Informe o nome do estudante: ");
    let idadeAluno = prompt("Informe a idade do estudante: ");

    listaEstudantes.push({ aluno: nomeAluno, idade: idadeAluno });
    continuarCadastro = prompt("Cadastrar outro estudante? (s/n): ");
} while (continuarCadastro.toLowerCase() === "s");

console.log("Estudantes cadastrados:", listaEstudantes);


// **Exercício 2: Cálculo de Médias de Notas**
const prompt2 = require('prompt-sync')();

let notasSimuladas = [];
let continuarNotas;

do {
    let primeiraNota = parseFloat(prompt2("Digite a primeira nota: "));
    let segundaNota = parseFloat(prompt2("Digite a segunda nota: "));
    let terceiraNota = parseFloat(prompt2("Digite a terceira nota: "));
    let mediaNotas = (primeiraNota + segundaNota + terceiraNota) / 3;

    console.log("Média das notas:", mediaNotas);

    notasSimuladas.push({ nota1: primeiraNota, nota2: segundaNota, nota3: terceiraNota, media: mediaNotas });
    continuarNotas = prompt2("Adicionar mais notas? (s/n): ");
} while (continuarNotas.toLowerCase() === "s");


// **Exercício 3: Sistema de Login**
const prompt3 = require('prompt-sync')();

const usuarioCadastro = "usuario@dominio.com";
const senhaCadastro = "senhaSegura123";
let continuarLogin;

do {
    let usuarioInformado = prompt3("Digite o seu nome de usuário: ");
    let senhaInformada = prompt3("Digite sua senha: ");

    if (usuarioInformado === usuarioCadastro && senhaInformada === senhaCadastro) {
        console.log("Login realizado com sucesso!");
        break;
    } else {
        console.log("Usuário ou senha incorretos, tente novamente.");
    }

    continuarLogin = prompt3("Tentar novamente? (s/n): ");
} while (continuarLogin.toLowerCase() === 's');


// **Exercício 5: Validação de Senha Segura**
const prompt4 = require('prompt-sync')();
let senhaValida;

do {
    let senha = prompt4("Crie uma senha com pelo menos 8 caracteres, incluindo letras e números: ");

    senhaValida = senha.length >= 8 && /[A-Za-z]/.test(senha) && /[0-9]/.test(senha);
    if (!senhaValida) {
        console.log("Senha inválida! A senha precisa de pelo menos 8 caracteres, letras e números.");
    } else {
        console.log("Senha válida! Acesso autorizado.");
    }
} while (!senhaValida);


// **Exercício 6: Cálculo da Média das Notas**
const prompt5 = require('prompt-sync')();

let continuarCalculando;

do {
    let nota1 = parseFloat(prompt5("Digite a primeira nota: "));
    let nota2 = parseFloat(prompt5("Digite a segunda nota: "));
    let nota3 = parseFloat(prompt5("Digite a terceira nota: "));
    let nota4 = parseFloat(prompt5("Digite a quarta nota: "));

    let mediaNotas = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log("A média das suas notas é:", mediaNotas);

    continuarCalculando = prompt5("Gostaria de adicionar mais notas? (s/n): ");
} while (continuarCalculando.toLowerCase() === "s");


// **Exercício 8: Verificação de Idade**
const prompt6 = require('prompt-sync')();

let continuarCadastroIdade;

do {
    let nome = prompt6("Qual é o seu nome? ");
    let idade = parseInt(prompt6("Informe sua idade: "));

    if (idade < 16 || idade > 100) {
        console.log("Idade inválida! Digite uma idade entre 16 e 100.");
        continuarCadastroIdade = prompt6("Deseja tentar novamente? (s/n): ");
    } else {
        console.log(`Olá, ${nome}! Sua idade é ${idade} anos.`);
        continuarCadastroIdade = "n";  // Encerra o loop
    }
} while (continuarCadastroIdade.toLowerCase() === "s");


// **Exercício 9: Cadastro de Inventário**
const prompt7 = require('prompt-sync')();

let minimoEstoque = 10;
let continuarEstoque;

do {
    let nomeProduto = prompt7("Qual é o nome do produto? ");
    let quantidadeProduto = parseInt(prompt7("Quantos itens há em estoque? "));

    if (nomeProduto.toLowerCase() === 'computador' && quantidadeProduto < minimoEstoque) {
        console.log(`O estoque do ${nomeProduto} está abaixo do mínimo! A quantidade mínima é ${minimoEstoque}.`);
    } else {
        console.log(`${nomeProduto} registrado com sucesso.`);
    }

    continuarEstoque = prompt7("Cadastrar outro produto? (s/n): ");
} while (continuarEstoque.toLowerCase() === 's');


// **Exercício 10: Cálculo de Fatorial**
const prompt8 = require('prompt-sync')();

let continuarFatorial;

do {
    let numero = parseInt(prompt8("Digite um número inteiro positivo para calcular o fatorial: "));

    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    console.log(`O fatorial de ${numero} é: ${fatorial}`);

    continuarFatorial = prompt8("Deseja calcular outro fatorial? (s/n): ");
} while (continuarFatorial.toLowerCase() === "s");


// **Exercício 11: Cálculo de Saldo Bancário**
const prompt9 = require('prompt-sync')();

let saldo = 0;
let continuarTransacao;

do {
    let tipoTransacao = prompt9("Deseja fazer um depósito ou saque? (d/s): ").toLowerCase();

    if (tipoTransacao === "d") {
        let valorDeposito = parseFloat(prompt9("Digite o valor do depósito: "));
        saldo += valorDeposito;
        console.log(`Depósito realizado. Saldo atual: R$ ${saldo}`);
    } else if (tipoTransacao === "s") {
        let valorSaque = parseFloat(prompt9("Digite o valor do saque: "));
        if (valorSaque <= saldo) {
            saldo -= valorSaque;
            console.log(`Saque realizado. Saldo atual: R$ ${saldo}`);
        } else {
            console.log("Saldo insuficiente para o saque.");
        }
    }

    continuarTransacao = prompt9("Deseja realizar outra transação? (s/n): ");
} while (continuarTransacao.toLowerCase() === 's');


// **Exercício 12: Conversão de Temperaturas**
const prompt10 = require('prompt-sync')();

let continuarConversao;

do {
    let celsius = parseFloat(prompt10("Digite a temperatura em Celsius: "));
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`A temperatura de ${celsius}°C é igual a ${fahrenheit}°F`);

    continuarConversao = prompt10("Deseja converter outra temperatura? (s/n): ");
} while (continuarConversao.toLowerCase() === "s");


// **Exercício 13: Simulação de Compras**
const prompt11 = require('prompt-sync')();

let totalCompras = 0;
let continuarComprando;

do {
    let valorProduto = parseFloat(prompt11("Qual o valor do produto? "));
    totalCompras += valorProduto;
    continuarComprando = prompt11("Adicionar outro produto? (s/n): ");
} while (continuarComprando.toLowerCase() === "s");

console.log(`O total da compra é: R$ ${totalCompras}`);


// **Exercício 14: Cálculo de Juros Simples**
const prompt12 = require('prompt-sync')();

let continuarJuros;

do {
    let capital = parseFloat(prompt12("Digite o valor do capital: "));
    let taxaJuros = parseFloat(prompt12("Digite a taxa de juros (em %): "));
    let tempo = parseInt(prompt12("Digite o tempo (em meses): "));

    let jurosSimples = (capital * taxaJuros / 100) * tempo;
    let valorFinal = capital + jurosSimples;
    console.log(`O valor final após os juros será: R$ ${valorFinal}`);

    continuarJuros = prompt12("Deseja calcular outro valor? (s/n): ");
} while (continuarJuros.toLowerCase() === "s");


// **Exercício 15: Pesquisa de Satisfação**
const prompt13 = require('prompt-sync')();

let continuarPesquisa;

do {
    let satisfacao = parseInt(prompt13("Qual sua satisfação com o curso de 1 a 5? "));
    if (satisfacao >= 1 && satisfacao <= 5) {
        console.log(`Obrigado pela sua avaliação: ${satisfacao}`);
    } else {
        console.log("Por favor, insira uma nota entre 1 e 5.");
    }

    continuarPesquisa = prompt13("Deseja continuar respondendo? (s/n): ");
} while (continuarPesquisa.toLowerCase() === "s");


// **Exercício 16: Cálculo de Parcelamento**
const prompt14 = require('prompt-sync')();

let continuarParcelamento;

do {
    let valorCompra = parseFloat(prompt14("Digite o valor total da compra: "));
    let parcelas = parseInt(prompt14("Digite o número de parcelas: "));

    let valorParcela = valorCompra / parcelas;
    console.log(`O valor de cada parcela será: R$ ${valorParcela}`);

    continuarParcelamento = prompt14("Deseja calcular outro parcelamento? (s/n): ");
} while (continuarParcelamento.toLowerCase() === "s");


// **Exercício 17: Conversão de Moedas**
const prompt15 = require('prompt-sync')();

let continuarConversaoMoeda;

do {
    let reais = parseFloat(prompt15("Digite o valor em reais: "));
    let cotacaoDolar = 5.25;  // Exemplo de cotação
    let dolares = reais / cotacaoDolar;
    console.log(`R$ ${reais} equivale a U$ ${dolares.toFixed(2)}`);

    continuarConversaoMoeda = prompt15("Deseja converter outro valor? (s/n): ");
} while (continuarConversaoMoeda.toLowerCase() === "s");


// **Exercício 18: Verificação de Palíndromo**
const prompt16 = require('prompt-sync')();

let continuarPalindromo;

do {
    let palavra = prompt16("Digite uma palavra para verificar se é um palíndromo: ");
    let palavraInvertida = palavra.split('').reverse().join('');
    
    if (palavra === palavraInvertida) {
        console.log(`${palavra} é um palíndromo.`);
    } else {
        console.log(`${palavra} não é um palíndromo.`);
    }

    continuarPalindromo = prompt16("Testar outra palavra? (s/n): ");
} while (continuarPalindromo.toLowerCase() === "s");


// **Exercício 19: Jogo de Pedra, Papel e Tesoura**
const prompt17 = require('prompt-sync')();

let continuarJogo;

do {
    let escolhaJogador = prompt17("Escolha: pedra, papel ou tesoura: ").toLowerCase();
    let opcoes = ['pedra', 'papel', 'tesoura'];
    let escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    console.log(`Computador escolheu: ${escolhaComputador}`);

    if (escolhaJogador === escolhaComputador) {
        console.log("Empate!");
    } else if (
        (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')
    ) {
        console.log("Você venceu!");
    } else {
        console.log("Você perdeu!");
    }

    continuarJogo = prompt17("Jogar novamente? (s/n): ");
} while (continuarJogo.toLowerCase() === "s");


// **Exercício 20: Contagem Regressiva**
const prompt18 = require('prompt-sync')();

let continuarContagem;

do {
    let numeroContagem = parseInt(prompt18("Digite um número para iniciar a contagem regressiva: "));

    for (let i = numeroContagem; i >= 0; i--) {
        console.log(i);
    }

    continuarContagem = prompt18("Deseja fazer outra contagem? (s/n): ");
} while (continuarContagem.toLowerCase() === "s");
