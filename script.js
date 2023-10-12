/* /* push(); agrega uno o mas elementos al array*/
/* let numeros = [1, 2, 3];
numeros.push(4,5);
console.log(numeros);
 */
/*pop(); elimina y devuelve el ultimo elemento del array*/
 /* let frutas = ["manzana", "banana", "uva"];
 let ultimaF = frutas.pop();
 console.log(ultimaF);
 console.log(frutas); */


 /*unshift(); agrega uno o mas elementos al array*/

 /* let colores = ["verde", "azul"];
 colores.unshift("blanco", "amarillo");
 console.log(colores); */

 /*unshift(); elimina y devuelve uno o mas elementos al array*/

 /* let paises = ["el salvador", "peru", "mexico"];
 let primerP = paises.shift();
 console.log(primerP);
 console.log(paises); */

//concat(); combina dos o mas arrays para crear un nuevo array*/

/* let arr1 = [1,2];
let arr2 = [4,5];
let combinarArray = arr1.concat(arr2);
 console.log(combinarArray); */


/*slice(); crea cipia superficial (shallow copy) del array con los elrmrntos*/

/* let ArrayOriginal = [1, 2, 3, 4, 5];
let copiaArray = ArrayOriginal.slice(1,4);
console.log(copiaArray) */;

/*splice(): Cambia el contenido de un array eliminando, reemplazando o agregando
elementos.*/

/* let fruta = ['banana', 'naranja', 'kiwi', 'pera', 'manzana'];
let removerFruta = fruta.splice(2,1,  'uva');
console.log(fruta);
console.log(removerFruta); */


/*forEach(): Ejecuta una función para cada elemento del array.*/

/* let numbers = [1,2,3];
numbers.forEach(function(number){

    console.log(number * 2);
});
 */
//ejercicio 2//
/* const products = [
    {name: 'camisa', precio:20},
    {name: 'Jeans', precio:25},
    {name: 'Zapatos', precio:80},
    {name: 'sombrero', precio:10},
]

let precioTotal = 0;

products.forEach(function(producto){
    precioTotal+= producto.precio;
});

console.log('precio total a pagar: $', precioTotal); */



//map(): Crea un nuevo array aplicando una función a cada elemento del array original.

//ejercicio 1

/* let numbers1 = [1,2,3];
let nuevoArreglo = numbers1.map(function(numebr){
    return number * 2
})
console.log(nuevoArreglo)

//ejercicio 2
//convertir grados celcius a grados farenheith

const Gcelcius = [0, 15, 30, 5, 10];
const Gfarenheith = Gcelcius.map(function(celcius){
    //formula °F = (°C * 9/5) + 32
    return (celcius * 9/5) + 32;
});
console.log('grados celcius: ', Gcelcius)
console.log('grados Farenheith: ', Gfarenheith)
 */

//filter(): Crea un nuevo array con todos los elementos que pasan una prueba

//ejercicio 2

/* const nums = [2, 8, 3, 6, 10, 4, 7]

const nums2 = nums.filter(funcion(number){
    return number > 5
});
console.log(nums2);

//ejercicio 2
const personas = [
    {nombre: 'yancy', edad: 24},
    {nombre: 'jose', edad: 17},
    {nombre: 'luciana', edad: 30},
    {nombre: 'kevin', edad: 15},
    {nombre: 'lenin', edad: 23},
]

const adultos = personas.filter(function(person){
    return person.edad > 18
})
console.log(adultos) */


//reduce(): Aplica una función a un acumulador y a cada elemento de un arreglo de

/* let num = [1, 2, 3, 4];
let sum = num.reduce(function(acumulador, valorActual){
    return acumulador + valorActual
}, 0)

console.log(sum) */


//every(): Comprueba si todos los elementos de un arreglo cumplen una condición dada y devuelve true o false

/* let number = [1, 2, 3, 4, 5];
let mayorCero = number.every(function(number){
    return number > 0
});

console.log(mayorCero) */


//sort(): Ordena los elementos de un arreglo en orden alfabetico (sin crear un nuevo arreglo

/* let nombres = ['margarita', 'elias', 'julio', 'isaac', 'lenin'];
nombres.sort();
console.log(nombres) */


//desarrolarr 4 ejercicios utilizando los metodos anterior vistos

//push(): agregar uno mas elementos al array

let materias = ['matematica', 'lenguaje', 'sociales'];
materias.push('ingles', 'ciencia');
console.log(materias);


//pop(): eliminar y devolver

let canciones = ["sky", "summer", "maybe"];
let ultimaC = canciones.pop();
console.log(ultimaC);
console.log(canciones);


//sort(): Ordena los elementos de un arreglo en orden alfabetico (sin crear un nuevo arreglo


let verduras = ['lechuga', 'rabanos', 'repollo', 'tomates', 'cebollas'];
verduras.sort();
console.log(verduras) 


//filter(): Crea un nuevo array con todos los elementos que pasan una prueba


const products = [
    {name: 'camisa', precio:20},
    {name: 'Jeans', precio:25},
    {name: 'Zapatos', precio:80},
    {name: 'sombrero', precio:10},
    {name: 'bolso', precio:50},
    {name: 'corbata', precio:20},
]

let precioTotal = 0;

products.forEach(function(producto){
    precioTotal+= producto.precio;
});

console.log('precio total a pagar: $', precioTotal);

//push():agrega un nuevo elemento al array

let numeros = [5, 4, 3];
numeros.push(1,2);
console.log(numeros);