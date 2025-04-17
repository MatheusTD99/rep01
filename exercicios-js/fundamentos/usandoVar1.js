{
    {
        {
            { var sera ="será??" 
              console.log(sera)
            }
        }
    }
}

console.log(sera)

// variaveis serão visiveis globalmente quando criadas. salvo excessoes de variaveis criadas dentro do escopo de uma função, como apresentado a seguir:

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)