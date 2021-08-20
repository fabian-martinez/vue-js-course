// importaciones y exportaciones

//importación por defecto
//import { owners } from './data/heroes'
//importar con default
import superHeroes from '../data/heroes'

//console.log(owners);
//console.log(superHeroes);


//TAREA
//getHeroById( Id )
export const getHeroById = ( id ) => (
    superHeroes.find( ( hero ) => hero.id === id)
    )

//getHeroesByOwner( DC or Marvel )
export const getHeroeByOwner = ( owner ) => (
    superHeroes.filter( ( hero ) => hero.owner === owner)
    )

//importaciòn en el index

// importaciones y exportaciones  TAREA
// import { getHeroById,getHeroeByOwner } from "./bases/imp-exp";

// console.log( getHeroById(2)); 

// console.log( getHeroeByOwner('DC') );