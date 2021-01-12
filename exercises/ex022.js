let num = [5, 8, 2, 9, 3]

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.push(4)
console.log(`O número ${num[5]} foi adicionado na ${num.length}ª posição`)
console.log(`A order crescente do array é ${num.sort()}`)

let valor = 1
let posicao = num.indexOf(valor)

if (posicao == -1) {
    console.log(`O valor ${valor} não foi encontrado!`)
} else {
    console.log(`O valor ${valor} está na posição ${posicao}`)
}