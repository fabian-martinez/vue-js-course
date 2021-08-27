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

# Representación declarativa
Puedo incluir logica dentro del html si estoy dentro del div de vue. Para ello uso los `{{ js_logic }}`
    
    <div id="myApp">
        <h1> Hola mundo </h1>
        <p> {{ 'Fabian ' + 'Martinez'}} </p>
    </div>

***NOTA:*** Tiene algunas limitaciones como el llamado a `if` o `while`. Se recimienda usar ternarios en caso de necesitar in `if` al renderizar.

Lo que va en el template puede ponerse directamente en el html dentro del vid de vue y tambien recibe la representación declarativa

