import { shallowMount, mount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';
import { pokemonsArray } from '../mocks/pokemons.mock';

describe('PokemonPage Pages', () => {

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

    test('debe mostrar los componentes de PokemonPicture y PokemonOption', () => {
        
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
        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')

        expect(picture.exists()).toBeTruthy()
        expect(options.exists()).toBeTruthy()

        expect(picture.attributes('pokemonid')).toEqual('1')
        expect(options.attributes('pokemons') ).toBeTruthy()
    });

    test('prueba de checkAnswerd true', async() => {
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

        await wrapper.vm.getAnswer(1)

        expect(wrapper.find('showResult')).toBeTruthy()
        console.log(wrapper.find('h2').text())
        expect(wrapper.find('h2').text()).toEqual('Correcto, bulbasaur')
    });

    test('prueba de checkAnswerd false', async() => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemonsArray,
                    pokemon: pokemonsArray[1],
                    showResult: false,
                    result: ''
                }
            }
        })

        await wrapper.vm.getAnswer(1)

        expect(wrapper.find('showResult')).toBeTruthy()
        console.log(wrapper.find('h2').text())
        expect(wrapper.find('h2').text()).toEqual('Error, era ivysaur')
    });

    test('debe de hacer match con el snapshop cuando responda', async() => {
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

        await wrapper.vm.getAnswer(1)

        expect(wrapper.html()).toMatchSnapshot()
    });
});