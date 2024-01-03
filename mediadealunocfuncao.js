const prompt = require("prompt-sync")()
function situacao(nota, media){
    if (nota >= media){
        console.log("Alundo aprovado!")
    } else{
        console.log("Ops... Aluno reprovado!")
    }
}

console.clear()
const notaAluno = Number(prompt("Nota do aluno: "))
const notaMedia = Number(prompt("Media: "))
situacao(notaAluno, notaMedia)