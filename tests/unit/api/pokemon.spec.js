import pokemonApi from "@/api/pokemonApi";

describe('pokemon API', () => {

    test('axios debe estar configurado con el pokeapi', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    });
});