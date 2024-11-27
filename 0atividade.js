const prompt = require("prompt-sync")();

function exercicio1() {
    console.log("\nExercício 1: Cálculo de Média de Notas");
    const notas = [];
    for (let i = 1; i <= 3; i++) {
        notas.push(parseFloat(prompt(`Digite a nota ${i}: `)));
    }
    const media = notas.reduce((a, b) => a + b, 0) / notas.length;
    console.log(`Média: ${media.toFixed(2)} - ${media >= 6 ? "Aprovado!" : "Recuperação!"}`);
}

function exercicio2() {
    console.log("\nExercício 2: Cadastro de Aluno no Sistema");
    const idade = parseInt(prompt("Digite sua idade: "));
    console.log(idade >= 16 
        ? "Você pode se inscrever no curso de Desenvolvimento de Sistemas." 
        : "Idade insuficiente para inscrição.");
}

function exercicio3() {
    console.log("\nExercício 3: Desconto para Alunos em Material Didático");
    const valor = parseFloat(prompt("Digite o valor do material (R$): "));
    const valorFinal = valor > 50 ? valor * 0.9 : valor;
    console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
}

function exercicio4() {
    console.log("\nExercício 4: Verificação de Presença");
    const presenca = parseFloat(prompt("Digite a porcentagem de presença: "));
    console.log(presenca >= 75 ? "Aprovado com frequência suficiente." : "Frequência insuficiente para aprovação.");
}

function exercicio5() {
    console.log("\nExercício 5: Identificação de Turno de Aula");
    const turno = prompt("Digite o turno (M - Matutino, V - Vespertino, N - Noturno): ").toUpperCase();
    const saudacao = { M: "Bom dia!", V: "Boa tarde!", N: "Boa noite!" }[turno] || "Turno inválido.";
    console.log(saudacao);
}

function exercicio6() {
    console.log("\nExercício 6: Controle de Nota Mínima para Aprovação");
    const notas = [];
    for (let i = 1; i <= 3; i++) {
        notas.push(parseFloat(prompt(`Digite a nota ${i}: `)));
    }
    const media = notas.reduce((a, b) => a + b, 0) / notas.length;
    const situacao = notas.some(n => n < 4) 
        ? "Reprovado!" 
        : media >= 6 
            ? "Aprovado!" 
            : "Recuperação!";
    console.log(`Média: ${media.toFixed(2)} - ${situacao}`);
}

function exercicio7() {
    console.log("\nExercício 7: Gerenciamento de Estoque de Laboratório");
    const estoque = parseInt(prompt("Digite a quantidade atual no estoque: "));
    console.log(estoque < 10 ? "Repor Estoque!" : "Estoque Suficiente.");
}

function exercicio8() {
    console.log("\nExercício 8: Classificação de Alunos por Rendimento");
    const media = parseFloat(prompt("Digite a média do aluno: "));
    const classificacao = media >= 8 
        ? "Excelente" 
        : media >= 6 
            ? "Bom" 
            : "Precisa Melhorar";
    console.log(`Classificação: ${classificacao}`);
}

function exercicio9() {
    console.log("\nExercício 9: Cálculo de Desconto para Curso de Extensão");
    const matriculado = prompt("O aluno está matriculado? (S/N): ").toUpperCase() === "S";
    const valor = parseFloat(prompt("Digite o valor do curso (R$): "));
    const valorFinal = matriculado ? valor * 0.8 : valor;
    console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
}

function exercicio10() {
    console.log("\nExercício 10: Sistema de Avaliação de Projetos");
    const notas = [];
    for (let criterio of ["Funcionalidade", "Design", "Documentação"]) {
        notas.push(parseFloat(prompt(`Digite a nota de ${criterio} (1 a 10): `)));
    }
    const media = notas.reduce((a, b) => a + b, 0) / notas.length;
    const avaliacao = media >= 8 
        ? "Excelente" 
        : media >= 6 
            ? "Bom" 
            : "Precisa Melhorar";
    console.log(`Média: ${media.toFixed(2)} - Avaliação: ${avaliacao}`);
}

// Exercícios Difíceis e Extras
// Adicione as funções 11 a 20 com o mesmo padrão acima.

function menu() {
    console.log("\n=== Menu de Exercícios ===");
    console.log("1. Cálculo de Média de Notas");
    console.log("2. Cadastro de Aluno no Sistema");
    console.log("3. Desconto para Alunos em Material Didático");
    console.log("4. Verificação de Presença");
    console.log("5. Identificação de Turno de Aula");
    console.log("6. Controle de Nota Mínima para Aprovação");
    console.log("7. Gerenciamento de Estoque de Laboratório");
    console.log("8. Classificação de Alunos por Rendimento");
    console.log("9. Cálculo de Desconto para Curso de Extensão");
    console.log("10. Sistema de Avaliação de Projetos");
    console.log("0. Sair");
    return parseInt(prompt("Escolha o exercício que deseja executar: "));
}

function main() {
    let opcao;
    do {
        opcao = menu();
        switch (opcao) {
            case 1: exercicio1(); break;
            case 2: exercicio2(); break;
            case 3: exercicio3(); break;
            case 4: exercicio4(); break;
            case 5: exercicio5(); break;
            case 6: exercicio6(); break;
            case 7: exercicio7(); break;
            case 8: exercicio8(); break;
            case 9: exercicio9(); break;
            case 10: exercicio10(); break;
            case 0: console.log("Saindo..."); break;
            default: console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 0);
}

main();
