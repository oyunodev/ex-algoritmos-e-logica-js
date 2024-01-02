const prompt = require("prompt-sync")()
console.log("Par ou Impar JS")
const numero = Number(prompt("Digite um número: "))
if (numero % 2 == 0){
    console.log(`O número ${numero} é par`)
} else{
    console.log(`O número ${numero} é impar`)
}
