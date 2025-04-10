let valor // não inicializada
console.log(valor)

valor = null  // ausencia de valor
console.log(valor)
//  console.log(valor.toString()) //Erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined. Deixe essa funçao apenas com a linguagem de definir o que seja undefined. quando quiser que uma constante não tenha valor atribua "null" para palavras e "0" para numerais
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)
