import { getHeroById } from "./bases/imp-exp";

console.log('Inicio');


//El cuerpo de la promesa se jecutar en la pila principal
// new Promise( (res,rej) => {
//     console.log('cuerpo de la promesa');
//     //res('Promesa resuelta')
//     rej('Promesa resuelta con error')
// })
// .then( (msg) => console.log( msg ))
// .catch( console.log )
//respuesta
//Inicio
//cuerpo de la promesa
//Fin

//la resoluciòn de la espuesta se ejecuta en una pila diferente a la principal

const getHeroByIdAsync = (id) => {
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            const heroe = getHeroById(id)
            if(heroe){
                resolve(heroe)
            }else{
                reject('Heroe no encontrado')
            }
        }, 1000)
    })
}

getHeroByIdAsync(7)
    .then(console.log)
    .catch(console.log)

console.log('Fin');
