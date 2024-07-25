/*
Crie uma função chamada greetUsers que aceita um array de nomes e
exibe uma saudação para cada nome no console.

Programa desenvolvido por:
 - Pedro Staichaka
 - Leonardo
 - Assunção
 - Carlos
*/


function greetUsers(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        console.log(`Òlá ${vetor[i]}, seja bem vindo`)
    }
}

let nomes = ['pedro', 'joao', 'luis']

greetUsers(nomes)
