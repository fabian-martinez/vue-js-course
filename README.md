# Introducción a Vue.js

## Hola mundo Vue.js
A un proyecto basico html se le puede incluir vue.js con solo agregar el cmd y un app.js donde ubica la raiz de la logica js.

    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>

Dentro del app.js creamos una app vue de la siguiente forma:

    const app = Vue.createApp({
        template: `
        <h1> Hola mundo </h1>
        <p> desde app.js </p>
         `
    })
    app.mount('#myApp')

Para que esto se renderise en el html es necesario crear un div con el nombre definido para el app vue (myApp)

    <div id="myApp"><div>

## Representación declarativa
Puedo incluir logica dentro del html si estoy dentro del div de vue. Para ello uso los `{{ js_logic }}`
    
    <div id="myApp">
        <h1> Hola mundo </h1>
        <p> {{ 'Fabian ' + 'Martinez'}} </p>
    </div>

***NOTA:*** Tiene algunas limitaciones como el llamado a `if` o `while`. Se recimienda usar ternarios en caso de necesitar in `if` al renderizar.

Lo que va en el template puede ponerse directamente en el html dentro del vid de vue y tambien recibe la representación declarativa

## Estados del componente
Para rederizar en tiempo real vue tiene diferentes estrategias. Para esto se pueden definir distintas opciones, a esta se le llama el ***optioApi***. Se declaran de lasiguiente manera:

    const app = Vue.createApp({
        methods: {},
        watch:{}
    })

> Otra opción el usar el **compositionAPI** a tra ves del metodo `setup() {}`

Para mantener el estado se puede utilizar la función `data()` que permite definit una variable reactiva. Esto se hace de la siguiente forma:

    const app = Vue.createApp({
        data() {
            return {
                message: 'Hola Mundo'
            }
        }
    })

De esta foma se puede llamar directamente en el html y este se renderiza de menra dinamica.

    <div id="myApp">
        <h1> Hola mundo </h1>
        <p> {{ message }} </p>
    </div>

## Introduccion a eventos
Primero es necesario definir metodos antes de poderlos llamar. Para esto, se crea unoa función dentro de la opción `methods` de la siguiente forma:

    const app = Vue.createApp({
        ... ,
        methods: {
            changeQuote() {
                console.log('Hola mundo')
            }
        },
        ...
    })

Para llamar a esos metodos desde un evento en el DOM se hace a traves de el prefijo `v-on:[evento]` y el nombre del metodo a llamar:
    
    <button v-on:click="changeQuote">
        Change quote
    </button>

En caso de necesitar la información relacionada con el evento, este se podra enviar como argumento en su llamado 
    
    v-on:click="changeQuote( event )"

Para llamar funciones o variables ya definidas se usa la palabra reservada `this` 

    const app = Vue.createApp({
        data() {
            return {
                message: 'Hola Mundo'
            }
        },
        methods: {
            changeQuote() {
                console.log('Hola mundo')
                this.message = 'Hola Vue'
            }
        }
    })

