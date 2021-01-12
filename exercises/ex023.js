let valores = [8, 1, 7, 4, 2, 9]
/*
for (let contador = 0; contador < valores.length; contador++) {
    console.log(`A posição ${contador} tem o valor ${valores[contador]}`)
}
*/

for (let contador in valores) {
    console.log(`A posição ${contador} tem o valor ${valores[contador]}`)
}