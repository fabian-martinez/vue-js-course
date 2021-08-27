//# Funciones de flecha

//Funcion clasica

function saludar( nombre ){
    return `Hola ${nombre}`
}

//Funcion clasica como constante: Para hacer mas seguro el llamado a la función

const saludarConst = function ( nombre ){
    return `Hola ${nombre}`
}

//Funcion flecha
const saludarFlecha = ( nombre ) => `Hola ${nombre}`

const nombre = 'Tony'

console.log(saludar(nombre));
console.log(saludarConst(nombre));
console.log(saludarFlecha(nombre));


const getUser = () => ({
        uid: 'ABC123',
        username: 'Tony'
    })

console.log(getUser());

const heroes = [{
    id: 1,
    name: 'Superman'
},{
    id: 2,
    name: 'Batman'
}]

const id = 1

const exiteHeroe = heroes.some(( heroe ) => heroe.id === id)
const heroe = heroes.find(( heroe ) => heroe.id === id)

console.log(exiteHeroe);
console.log(heroe);