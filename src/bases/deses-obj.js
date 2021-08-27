//Destructuración

const person = {
    name: 'Tony',
    age: 54,
    codeName: 'Ironman'
}

// leer varaibles de un objeto
console.log(person.name);
console.log(person.age);
console.log(person.codeName);

// Desestructurar objeto en las variables que lo componen
const { age, name, codeName, power = 'valor por defecto' } = person
console.log(age);
console.log(name);
console.log(codeName);

//Uso de desestruturación en una función tipica de crear un objeto
const createHero = ( { age, name, codeName, power = 'valor por defecto' } ) => ({
        id:1123456,
        name,
        age,
        power
    })

console.log( createHero( person ) );