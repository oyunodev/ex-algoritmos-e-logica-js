const prompt = require("prompt-sync")()
const anuncio = prompt("Anuncio: ")
let numPalavras = 0
const tam = anuncio.length
for (let i = 0; i < tam; i++){
    if (anuncio.charAt(i) == " "){
        numPalavras++
    }
}
console.clear()
console.log(`Anuncio: ${anuncio}\n Nº de Palavras: ${numPalavras + 1}\n Nº de Letras: ${tam}`)