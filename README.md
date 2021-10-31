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
