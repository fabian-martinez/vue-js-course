
// la palabra reservada **const** es para definir una variable que se mantenga estatica todo el tiempo
// la palabra reservada **let** es para definir variables que van a cambiar su valor durante la ejecución del programa

const nombre = 'Tony'
let apellido = 'Stark'

console.log(nombre, apellido)

if(true) {
    // se puede crear constantes con mismo nombre pero en un scope diferente
    const nombre = 'Peter'
    apellido = 'Parker'
    console.log(nombre);
}

console.log(nombre, apellido);