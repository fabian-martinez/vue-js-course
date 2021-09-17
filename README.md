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
## Snapshots
La idea que se tenga un snapshot de la aplicación para evitar cambios no esperados del html del componente. Para ello lo primero es usar el `shadowMount` para montar el componente a probar. Luego se optiene un snapshot del html del componente mediante y se valida respecto al snapshot almacenado.
    
    const wrapper = shallowMount(Counter)
    expect(wrapper.html()).toMatchSnapshot()
**shadownMount(component)**: Es el encargado de monta el componente. Este metodo solo los elementos minimos del componente. Pertenece a la suit de vue para pruebas.

Para crear el snapshot se corre la preba por primera vez. Esto toma el snapshot y lo almacena en una carpeta especial llamada *\_\_snapshots\_\_*
###### Actualizar snapshop
En caso que el snapshop se deba actualizar se corre el comando de pruebas `npm run test:unit` con la opción `-u`

## Verificar etiquetas html
Para segurarnos que no se asegurar que no se presente ningun cambio inesperado en el contenido html tambien podemos validar por buscando la etiqueta y validar su contendo. Esto se hace mediante el metodo `find('etiqueta')` esto puede incluir el nombre de la etiqueta (ejemplo: h2, button, p, etc.) o por id con el prefijo `#` o class con el prefijo `.`. Luego de optener el valor dentro de la etiqueta por medio de el metodo `text()`. Acontinuaciòn podemos ver una implementaciòn de ejemplo:

    const wrapper = shallowMount(Counter)
    const h2Value = wrapper.find('h2')
    expect(h2Value.text()).toBe('Counter')

Tambien podemos evaluar la existencia del component por medio del metodo `.exists()`. Acontinuación vemos una implementación

    const wrapper = shallowMount(Counter)
    expect(wrapper.find('h2').exists()).toBeTruthy()

## Find vs FindAll
En caso de que existan varias etiquetas iguales se puede usar el metodo `findAll()` que rretorna un arreglo con todas las etiquetas que complen con el parametro de busqueda. Se puede ver asi:

    const pTags = wrapper.findAll('p')
    expect(pTags[1].text()).toEqual('100')

El problema es que esta solucion puede ser muy sensible al cambio por tal razon se recomienda que se incluya un atributo en el componente y se evalue con base al atributo de la siguiente forma

    <p data-testid="counter"> {{ counter }} </p>

    