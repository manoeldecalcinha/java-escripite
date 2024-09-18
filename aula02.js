let forma = 'triangulo';
let base = 20;
let altura = 40;
//let areaRetangulo = altura * base
//let areaTriangulo = (altura * base) /2
let area;
let areaRetangulo = base * altura;
let areaTriangulo = (altura * base )/2;

//Condicional Se... Então...

if(forma === 'retangulo'){
    area = altura * base;
    console.log(areaRetangulo);
} else{
    area = (altura * base) /2;
    console.log(areaTriangulo)
}

//Boolean
const usuarioLogado = true;
const contaPaga = false;
//Truthy ou Falsy
//0 --> False
//1 --> True

console.log(0 == false); //retorna verdadeiro(true)
console.log('' == false); //retorna verdadeiro(true)
console.log(1 == true); //retorna verdadeiro(true)
console.log(contaPaga == 1);

//undefinedv --> Não definido;
//null --> nulo

let minhaVar;
let varNull = null;
let numero = 3;
let string = 'oi';

console.log(typeof minhaVar);
console.log(typeof numero);
console.log(typeof varNull);
console.log(typeof string);
