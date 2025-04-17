// par nome/valor
const saudacao = "Opa" // contexto léxico 1(local fisico onde sua variavel foi definida)

function exec() {
    const saudacao = "Faaala" // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Salvador Gessele",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)