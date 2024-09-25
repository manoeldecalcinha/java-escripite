//Alguns erros

let numero = 12 // O javascript é sensível ao capsLok
//console.log(Numero)// Erro de declaração, variável não declarada

//console.log(numero //Erro de sintaxe, falta de parentes

// Tratamento de erros

//console.error('A lista não está executando a média')// Declara um erro para um outro usuário

const idadeMinima = 18
let idadeCliente = 17

if(idadeCliente >= idadeMinima){
    console.log('Cerveja')
}   else{
    console.log('Suco')
}

// Valor ternário

idadeCliente = 20

//modo ternário, ____ <= ______ ? ------ : ------
//modo ternário, ______ == ______ ? ----- : ------
console.log(idadeCliente >= idadeMinima ? 'Cerveja'  :  'Suco')
                      // => função arrow, diferente de maior igual
//utilizar com cautela

const nome = "Teotonio"
const idade = 32
const cidadeNascimento = "Foz do Iguaçu"

const apresentacao = "Meu nome é " + nome + " tenho " + idade + " anos e nasci em " + cidadeNascimento

console.log(apresentacao)

// Template string 

const apresentacao2 = `Sou o ${nome} e tenho ${idade} anos de idade. Nasci na cidade de ${cidadeNascimento}`

console.log(apresentacao2)