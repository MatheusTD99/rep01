// novo recurso do ES2015

const pessoa = {
    nome: "Ana",
    idade: 25,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

//console.log(pessoa.nome)

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const{sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const {conta: {ag, num}} = pessoa
console.log(ag, num)  //cuidado em desustruturar dado alinhado. deve ter certeza que o caminho até o dado está setado. apenas o ultimo dado pode estar nulo, não um "filho" dele

