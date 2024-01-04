const prompt = require("prompt-sync")()
const altura = prompt("Altura da árvore: ")
console.log()
for (let i = 1; i <= altura; i++){
    const espacos = 30 + (altura - i)
    console.log(" ".repeat(espacos) + "*".repeat(i * 2))
}