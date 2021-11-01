# pokemon-game

Este proyecto consiste en un juego de adivinar el pokemon apartir de su imagen oculta en negro. Para ellos se se utiliza una api que me entrega esta información. El objetivo principal del juego es mostrar como se comunican los componentes de un proyecto ***Vue***.
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

## Arquitectura del proyecto

El proyecto esta compuesto por dos componentes principale el `PokemonOptions` y el `PokenonPicture` el primero muestra diferentes nombres de pokemon para que el jugador seleccione cual corresponde con la imagen y el segundo compinente se encarga de mostrar la imagen oculta y luego desocultarla cuando el jugador hace click.

> Para este proyecto se va a utilizar el API `https://pokeapi.co/`

## Componente PokemonPicture

El componente `PokemonPicture` va a recibir dos parametro, el primer parametro es el id del pokemon y con este va a obtener la imagen del pokemon a partir de su id. el segundo parametro es una bandera que deacuerdo a si es `true` muestra el pokemon de lo contrario muestra la imagen oculta.

## Generando PokemonOptions

Para la generaciòn de las opciones de pokemon se creo un helper llamado `getPokemonOptions.js`. Compuesto de tres metodos, el metodo generara que orquesta la generaciòn de las opciones `getPokemonOptions` y dos metodos privados. El primer metodo `getPokemonsId` genera un array de ids del 1 al 650 que corresponde con los ids disponibles por el api `pokeapi.co`. El segundo metodo `getPokemonNames` obtiene el nombre de los pokemons apartir del id, esto lo hace mediante un llamado al API por medio de axios (se crea componente para llamado al api `api/pokemonApi.js`).

`getPokemonOptions` genera 4 valores alatorios a partir del array obtenido en `getPokemonId` y con los ids usa el metodo `getPokemonsName` y de esta manera entrega el id que permite al componente `PokemonPicture` obtener la imagen y el nombre que son entregados al componente `PokemonOptions`.

## Integrando PokemonOptions al componente

En la pagina `PokemonPage` se hace el llamado al metodo `getPokemonOptions` que como se menciono anteriormente trae el registro de cuatro pokemons (id y nombre). Esto se hace desde el metodo reservado `mounted()` que ejecuta la operaciòn en el momento en el que vue monta el objeto. Luego le transfiere las opciones como parametros al componente. El componente `PojemonOptions` recibe los pokemon y por medio de `v-for` se asigna una opciòn a cada boton.

## Mostrando un pokemon de las opciones aleatoriamente

Desde la pagina principal `PokemonPage` y a partir del array se obtiene uno de los 4 elementos de menera aleatoria y se le envia al componente `PokemonPicture` adicionalmente se define la bandera para visualizar u ocultar el pokemon y usando `v-if` y `v-else` evitamos que se muestre una imagen en blanco mientras se cargan los datos desde el API.

## Informando al componente padre que el pokemon seleccionado

Al hacer click en alguna de las opciones de pokemon es necesario identificar cual fue sobre la que se hizo click para ello se usa el metodo reservado `$emit` esto se hace desde el componente hijo. Este metodo recibe dos valores, el primero es el nombre que se le quiere asignar al evento y el segundo es el valor que se quiere enviar cuando ocurre el evento:

    <li v-for="pokemon in pokemons" 
        :key="pokemon.id"
        @click="$emit( 'pokemonSelected', pokemon.id )">
        {{pokemon.name}}
    </li>

En este caso el evento es el click y se le va a llamar `pockemoSelected` y va a recibir el id del pokemon 

Para que el componente padre (el PokemonPage) lo lea se necesita definir como un evento del hijo y se asigna una operaciòn que ejecute la acciòn que necesita el padre cuando ocurre el evento en el hijo:

        <pokemon-options 
        :pokemons="pokemonArr"
        @pokemonSelected="getPokemonSelected"/>

En este caso PokemonPage va a ejecutar la operaciòn `getPokemonSelected` cuando ocurra el evento click del componente PokemonOptions. En el caso que el evento envie un valor como en el caso del `pokemon.id` este sera enviado a travez de la propiedad `$event` la cual por defecto es la primera que se envia (por eso no es necesario declararla en el metodo `getPokemonSeleted`)

        getPokemonSelected($event) // forma explicita de llamar a $event