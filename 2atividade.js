const prompt = require('prompt-sync')();

// **1. Cadastro de Estudantes**
let estudantes = [];
do {
    const nome = prompt("Nome do estudante: ");
    const idade = parseInt(prompt("Idade do estudante: "));
    estudantes.push({ nome, idade });
} while (prompt("Cadastrar outro estudante? (s/n): ").toLowerCase() === "s");

console.log("\nEstudantes cadastrados:");
estudantes.forEach((e, i) => console.log(`${i + 1}. Nome: ${e.nome}, Idade: ${e.idade}`));

// **2. Cálculo de Média**
let medias = [];
do {
    const notas = Array.from({ length: 3 }, (_, i) =>
        parseFloat(prompt(`Digite a nota ${i + 1}: `))
    );
    const media = notas.reduce((a, b) => a + b, 0) / notas.length;
    medias.push(media);
    console.log(`Média: ${media.toFixed(2)}`);
} while (prompt("Calcular outra média? (s/n): ").toLowerCase() === "s");

// **3. Sistema de Login**
const login = { usuario: "admin", senha: "123456" };
do {
    const user = prompt("Usuário: ");
    const pass = prompt("Senha: ");
    if (user === login.usuario && pass === login.senha) {
        console.log("Login bem-sucedido!");
        break;
    } else console.log("Usuário ou senha incorretos.");
} while (prompt("Tentar novamente? (s/n): ").toLowerCase() === "s");

// **4. Validação de Senha Segura**
do {
    const senha = prompt("Crie uma senha com pelo menos 8 caracteres, números e letras: ");
    const validaSenha = senha.length >= 8 && /\d/.test(senha) && /[a-zA-Z]/.test(senha);
    console.log(validaSenha ? "Senha válida!" : "Senha inválida, tente novamente.");
} while (!validaSenha);

// **5. Verificação de Idade**
do {
    const idade = parseInt(prompt("Idade: "));
    if (idade >= 16 && idade <= 100) {
        console.log(`Idade válida: ${idade}`);
        break;
    } else console.log("Idade inválida! Informe entre 16 e 100 anos.");
} while (prompt("Tentar novamente? (s/n): ").toLowerCase() === "s");

// **6. Cálculo de Fatorial**
do {
    const num = parseInt(prompt("Número para calcular o fatorial: "));
    const fatorial = Array.from({ length: num }, (_, i) => i + 1).reduce((a, b) => a * b, 1);
    console.log(`Fatorial de ${num}: ${fatorial}`);
} while (prompt("Calcular outro fatorial? (s/n): ").toLowerCase() === "s");

// **7. Cadastro de Produtos**
let produtos = [];
do {
    const nome = prompt("Produto: ");
    const quantidade = parseInt(prompt("Quantidade em estoque: "));
    produtos.push({ nome, quantidade });
    console.log(quantidade < 10 ? "Estoque abaixo do mínimo!" : "Produto cadastrado.");
} while (prompt("Cadastrar outro produto? (s/n): ").toLowerCase() === "s");

// **8. Pedra, Papel ou Tesoura**
const opcoes = ["pedra", "papel", "tesoura"];
do {
    const jogador = prompt("Escolha (pedra, papel, tesoura): ").toLowerCase();
    const computador = opcoes[Math.floor(Math.random() * opcoes.length)];
    console.log(`Você: ${jogador} | Computador: ${computador}`);
    if (jogador === computador) console.log("Empate!");
    else if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    )
        console.log("Você venceu!");
    else console.log("Você perdeu!");
} while (prompt("Jogar novamente? (s/n): ").toLowerCase() === "s");

// **9. Conversão de Moedas**
const taxaConversao = 5.25;
do {
    const reais = parseFloat(prompt("Valor em reais: "));
    const dolares = reais / taxaConversao;
    console.log(`R$ ${reais.toFixed(2)} = U$ ${dolares.toFixed(2)}`);
} while (prompt("Converter outro valor? (s/n): ").toLowerCase() === "s");

// **10. Verificação de Palíndromo**
do {
    const palavra = prompt("Digite uma palavra: ");
    const ehPalindromo = palavra === palavra.split("").reverse().join("");
    console.log(ehPalindromo ? `${palavra} é um palíndromo.` : `${palavra} não é um palíndromo.`);
} while (prompt("Verificar outra palavra? (s/n): ").toLowerCase() === "s");
