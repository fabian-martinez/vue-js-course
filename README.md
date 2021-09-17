## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Pruebas unitarias y de integración

La estructura de una prueba unitario o de integración sigue el patron AAA, por sus siglas en ingles, *Arreglar (Arrange)*, *Actuar (Act)*, *Comprobar (Assert)*. Para el caso de vue se recomienda que la estructura de carpetas de las pruebas siga la misma estructura de carpetas del proyecto, ejemplo:

    + src
    |  |
    |  +---components
    |  |    |  component1.vue
    |  \---pages
    |       |  page1.vue
    \ test
       |
       \---unit
           |
           +---components
           |   | component1.spec.js
           \---pages
               | page1.spec.js

Dentro del proyecto iniciamos con ***TestSuit*** que es un conjunto de pruebas que certifican un componente en especifico, se define con la palabra reservas `describe` recibiendo dos parametros, el nombre de la prueba y una función que contiene todas las pruebas del ***TestSuit***. Dentro se llama a `test` que la descripción de la prueba un una función donde se ejecuta la prueba. Dentro se implementan los tres pasos de la prueba: `Arrange`, `Act`, `Assert`

###### Ejemplo:

    describe( 'Example Component', () => {
        test( 'Debe ser mayor a 10', () => {

            // Arrange
            let value = 5

            //Act
            value = value + 2 
        
            //Assert
            if( value > 10 ){
                //TODO: todo bien
            }else{
                throw `${value} no es mayor a 10`
                }

        } )
    } )

## Expect
Expect es un conjunto de funciones que permiten hacer aserciones de manera sencilla y facil de leer para mas información se puede leer la documentción de [Jest](https://jestjs.io/docs/expect) (Framework utilizado para estas pruebas).

###### Ejemplo:
En este caso se va a validar que la variable `value` del elemplo anterior sea mayor a 10 utilizando los expect de la libreria de jest

    expect(value).toBeGreaterThan(10)
## Snapshot
La idea del snapshot es que se tenga un snapshot de la aplicaciòn para evitar cambios
###### shadownMount
Monta solo los elementos minimos del componente