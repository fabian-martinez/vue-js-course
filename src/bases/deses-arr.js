// Desestructuraciòn de arreglos

const characters = ['Goku', 'Vegeta', 'Trunks']

//Extracciòn clasica
const g = characters[0]
const v = characters[1]
const t = characters[2]
console.log(g);
console.log(v);
console.log(t);

// extracción con desextruturaciòn de algunos componentes del array
const [ goku, , trunks, goten = 'valor por defecto'] = characters
console.log( trunks )
console.log( goku )
console.log( goten )