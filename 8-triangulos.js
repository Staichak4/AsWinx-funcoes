/*
Crie uma função chamada drawTriangle que aceite um número n e desenhe um triângulo de
altura n no console usando asteriscos (*).

Dica: Utilize um laço de repetição para iterar desde 1 até n. Em cada iteração,
imprima uma linha com um número crescente de asteriscos, começando com 1 asterisco
na primeira linha e adicionando um asterisco a cada linha subsequente.
Você pode usar a função .repeat().

Programa desenvolvido por:
 - Pedro Staichaka
 - Leonardo
 - Assunção
 - Carlos
*/

function drawTriangle(n) {
    let linha = '*'
    for (let i = 1; i <= n; i++){
        console.log(linha)
        linha += `*`
    }
}

console.log(drawTriangle(5))