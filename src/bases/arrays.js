// # Arrays

const arreglo = [1,2,3,4] // Definir un arreglo

// lo arreglos empiezan en base a 0
console.log(arreglo);
console.log(arreglo[0]); //consultar una posición del arreglo

arreglo.push(5) //modifico un arreglo con un metodo definido dentro de las propiedades de arreglos
console.log(arreglo);

//Uso del operado Spread (...) para romper la referencia de un arreglo

const arreglo2 = [ ...arreglo ]
arreglo2.push(6)

console.log(arreglo);
console.log(arreglo2);

//Otras formas de romper referencia

const arreglo3 = arreglo2.map( function(n){
    return n*2
})

// map itera cada valor del arreglo con una funcion

console.log(arreglo2);
console.log(arreglo3);