// # Objetos Literal


// Deiniciòn de un objeto literal objeto literal = { atributos... }

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 523123,
        lat: 14.3232,
        lng: 34.456842
    }
}

/// los objetos son pasados por referencia no por valor
const persona2 = persona
persona2.nombre = 'Peter'

console.log(persona2);
console.log(persona); // persona y persona2 hacen referencia al mismo objeto persona

//Romper la referencia usamos el operador spratt (...)
const persona3 = { ...persona}
persona3.apellido = 'Parker'

console.log(persona3); // persona3 tiene su propia referencia diferente a persona
console.log(persona);