let firstName='Fabian';
let lastName='Martinez';

// console.log(`${ firstName || 'no firstname' } ${ lastName || 'no lastname' }`);

const isActive = true

//// if clasic form
// if (isActive) {
//     message = 'active' 
// } else {
//     message = 'Inactive'
// }

//Operador ternario
const message = ( isActive ) ? 'Activo' : 'Inactivo'