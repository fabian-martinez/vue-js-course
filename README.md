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

#### Modificadores de v-on

Adicionalmente si se requiere algun tipo de conportamiento especial vue ya tiene definidos unos modificadores para acciones mas comunes. En el ejemplo a continucaión se utiliza el modificador `.enter` para que al precional la tecla **enter** se ejecute el metodo `addQuote`.

        <input 
            type="text"
            v-model="newQuote" 
            v-on:keypress.enter="addQuote">

## Directiva v-for
Cuando se requiere la renderizaciòn de un arreglo de objetos, Vue nos permite usar la directiva `v-for`para esto toca tener definido el arreglo dentro del ***return*** de ***data()*** 

    const quotes = [
        { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' }, ....
    ]

    const app = Vue.createApp({
        data() {
            return {
                quotes
            }
        },
    })

Para su renderización dentro del DOM se hace de la siguiente forma:

    <ul>
        <li v-for="quote in quotes">author</li>
    </ul>

Para incluir el indice de los objetos del arreglo es necesario poner un parentesis e incluirlo como segundo indice `(objeto,indice)`

###### Ejemplo:

    <li v-for="({quote, author}, index) in quotes">
        <span>{{index+1}} - {{quote}}</span>
        <blockquote>- {{author}}</blockquote>
    </li>

## Directiva v-model
La directiva `v-model`permite obtener datos del DOM y asignarlos a una variable reactiva. Primero se debe inicializar la variable reactiva dentro de data.

    const app = Vue.createApp({
        data() {
            return {
                ....,
                newQuote:''
            }
        },
    })

En el ejemplo para llamarla definimos dentro objeto de tipo input la directiva de la siguiente manera.

    <input type="text" v-model="newQuote">

De esta forma el valor de la variable `newQuote`va a variar de manera reactiva.

## Directivas v-if y v-show 
Si quieremo modificar que elementos se en el dom tenemos dos opciones `v-if` o `v-show`. Ambas reciben como parametro una evaluación *true* o *false*. 
En el caso de de `v-if`este no renderiza el objeto. Lo que quiere decir que no se puede visualizar en el html que se visualiza en la pagina. Por el contrario, el `v-show`oculta el objeto usando un ``style="display:none;"``. Adicionalmente el `v-if`es **lazyload** lo que significa que no evalua nada dentro del componente en caso de que sea falso.

> **Nota:** Otra observaciòn es que no es permitido usar un `v-if`y un `v-for`para el mismo componente.