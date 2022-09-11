import { shallowMount, mount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';
import { pokemonsArray } from '../mocks/pokemons.mock';


describe('PokemonPage Pages', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    test('debe llamar a mixPokemonArray al montar', () => {
        const mixPokemonArr = jest.spyOn(PokemonPage.methods, 'mixPokemonArr')
        shallowMount(PokemonPage)
        expect(mixPokemonArr).toHaveBeenCalledTimes(1)
    });

    test('debe de hacer match con el snapshop cuando cargen los pokemons', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemonsArray,
                    pokemon: pokemonsArray[0],
                    showResult: false,
                    result: ''
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    });
});