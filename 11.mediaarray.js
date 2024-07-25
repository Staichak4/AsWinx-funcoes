/*
Crie uma função chamada averageArray que aceite um array de números e retorne a média
dos números. Para esta função vocês devem pesquisar e entender como o método reduce
funciona.

Dica: Some todos os elementos do array e divida pela quantidade de elementos. Utilize o
método reduce para somar os elementos do array.

Programa desenvolvido por:
 - Pedro Staichaka
 - Leonardo
 - Assunção
 - Carlos
*/


function averageArray(num) {
    let media
        for (let i = 0; i < num.length; i++) {
            media = num.reduce((soma, numero) => soma + numero, 0);
        }
    return media / num.length
}

let num = [1, 2, 3, 4, 5]

console.log(`A média dos numeros é: ${averageArray(num)}`)