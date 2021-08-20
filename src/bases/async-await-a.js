const myPromise = () =>{
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            resolve('Tenemos un valor en la promesa')
            //reject('Tenemos un error en la promesa')
        }, 1000)
    })
}

const medirTiempoAsync = async () => {

    try {
        console.log('inicio');

        //myPromise().then(console.log)
        const response = await myPromise()
        console.log(response);

        console.log('fin');

        return 'fin de medir tiempo async'
        //throw 'Error al llamar la función'
    } catch (error) {
        throw 'Error medirTiempoAsync'
    }
    
}

medirTiempoAsync()
    .then( value => console.log('Exito:', value))
    .catch( err => console.log('Error:', err))
