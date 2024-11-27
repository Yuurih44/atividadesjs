// Exercício 1: Sistema de Cadastro de Cursos
let curso = "Design Gráfico";
switch (curso) {
    case "Design Gráfico":
        console.log("Curso de Design Gráfico: Duração 2 anos, carga horária de 1400h.");
        break;
    case "Culinária":
        console.log("Curso de Culinária: Duração 1 ano, carga horária de 1000h.");
        break;
    case "Programação":
        console.log("Curso de Programação: Duração 3 anos, carga horária de 1800h.");
        break;
    default:
        console.log("Curso não disponível.");
}

// Exercício 2: Calculadora Básica
let num1 = 20;
let num2 = 4;
let operação = "*";
switch (operação) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log("Erro: Divisão por zero.");
        }
        break;
    default:
        console.log("Operação não reconhecida.");
}

// Exercício 3: Classificação de Idade
let idade = 70;
switch (true) {
    case (idade >= 0 && idade <= 12):
        console.log("Criança");
        break;
    case (idade >= 13 && idade <= 19):
        console.log("Adolescente");
        break;
    case (idade >= 20 && idade <= 64):
        console.log("Adulto");
        break;
    case (idade >= 65):
        console.log("Idoso");
        break;
    default:
        console.log("Idade inválida.");
}

// Exercício 4: Sistema de Classificação de Notas
let nota = 6;
switch (true) {
    case (nota >= 0 && nota < 5):
        console.log("Reprovado");
        break;
    case (nota >= 5 && nota < 7):
        console.log("Aprovado com ressalvas");
        break;
    case (nota >= 7 && nota <= 10):
        console.log("Aprovado com mérito");
        break;
    default:
        console.log("Nota inválida.");
}

// Exercício 5: Simulador de Dias da Semana
let dia = 6;
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido.");
}

// Exercício 6: Sistema de Mensagens de Eventos
let evento = "Hackathon";
switch (evento) {
    case "Hackathon":
        console.log("O Hackathon ocorrerá nos dias 15 e 16 de abril.");
        break;
    case "Palestra Motivacional":
        console.log("A palestra ocorrerá no dia 10 de maio.");
        break;
    case "Feira de Ciências":
        console.log("A feira acontecerá no dia 22 de junho.");
        break;
    default:
        console.log("Evento não encontrado.");
}

// Exercício 7: Calculadora de Meses do Ano
let mes = 12;
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Mês inválido.");
}
