import pokemonApi from "../api/pokemonApi";

const getPokemonsId = () => {
    const pokemonsArr = Array.from(Array(650))
    return pokemonsArr.map((_, index) => index + 1)
}

const getPokemonsName = async([optionA, optionB, optionC, optionD] = []) => {

    const promiseArry = [
        pokemonApi.get(`/${optionA}`),
        pokemonApi.get(`/${optionB}`),
        pokemonApi.get(`/${optionC}`),
        pokemonApi.get(`/${optionD}`)
    ]

    const [
        { data: pokemonA },
        { data: pokemonB },
        { data: pokemonC },
        { data: pokemonD }
    ] = await Promise.all(promiseArry)

    return [
        { id: pokemonA.id, name: pokemonA.name },
        { id: pokemonB.id, name: pokemonB.name },
        { id: pokemonC.id, name: pokemonC.name },
        { id: pokemonD.id, name: pokemonD.name }
    ]

}

const getPokemonOptions = async() => {
    const mixedPokemons = getPokemonsId().sort(() => Math.random() - 0.5)
    const pokemons = await getPokemonsName(mixedPokemons.splice(0, 4))
    return pokemons
}

export default getPokemonOptions