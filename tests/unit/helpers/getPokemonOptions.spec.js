import getPokemonOptions, { getPokemonsId, getPokemonsName } from "@/helpers/getPokemonPotions";
import { pokemonsArray } from '../mocks/pokemons.mock';

describe('getPokemonOptions helper ', () => {

    test('debe regresar arreglo de numeros', () => {
        const pokemonids = getPokemonsId()

        expect(pokemonids.length).toBe(650)

        expect(pokemonids[0]).toBe(1)
        expect(pokemonids[500]).toBe(501)
        expect(pokemonids[649]).toBe(650)
    });

    test('Debe retornar un arreglo de 4 elementos con nombres de pokemons', async() => {
        const pokemons = await getPokemonsName([1, 2, 3, 4])
        const pokemonsAssert = pokemonsArray

        expect(pokemons.length).toBe(4)
        expect(pokemons).toStrictEqual(pokemonsAssert)
    });

    test('Debe retornar un areglo mesclado', async() => {
        const pokemons = await getPokemonOptions()
        const pokemonsAssert = [
            { id: expect.any(Number), name: expect.any(String) },
            { id: expect.any(Number), name: expect.any(String) },
            { id: expect.any(Number), name: expect.any(String) },
            { id: expect.any(Number), name: expect.any(String) }
        ]
        expect(pokemons.length).toBe(4)
        expect(pokemons).toStrictEqual(pokemonsAssert)
    });
});