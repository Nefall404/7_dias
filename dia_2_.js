/* No desafio 2, foi pedido para ser realizado um questionário no qual salva o nome, a idade e a linguagem que a pessoa está estudando. */


let nome = prompt("Qual o seu nome?");
let idade = prompt("Quantos anos você tem?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");

alert("Olá, " +nome+ " você tem " +idade+ " anos e já está aprendendo "+linguagem+"!");



/*Essa segunda parte, é um desafio adicional, no qual é questionado se o usuário está gostando de aprender a linguagem estudada  */

//Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

let sugestao = prompt("Você gosta de estudar "+linguagem+"? Responda com o número 1 para SIM ou 2 para NÃO.");
    if(sugestao == 1|| sugestao ==2){
        if(sugestao==="1"){
            alert("Muito bom! Continue estudando e você terá muito sucesso.")
        }
        if(sugestao === "2"){alert("Ahh que pena... Já tentou aprender outras linguagens?")}
    }   

    if(sugestao != "1" && "2"){
        alert(+nome+" digite uma resposta válida.")
    }
