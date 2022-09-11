import { shallowMount } from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions';
import { pokemonsArray } from '../mocks/pokemons.mock';


describe('PokemonOptions Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons: pokemonsArray
            }
        })
    })

    test('debe hacer match el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    });

    test('debe mostrar las cuatro opciones correctamente', () => {
        const liTags = wrapper.findAll('li')
        expect(liTags.length).toBe(4)
        expect(liTags[0].text()).toBe("bulbasaur")
        expect(liTags[3].text()).toBe("charmander")
    });

    test('debe emitir con sus respectivos parametros al hacer click', () => {
        const [li1, li2, li3, li4] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        expect(wrapper.emitted('pokemonSelected').length).toBe(4)
        expect(wrapper.emitted('pokemonSelected')[0]).toStrictEqual([1])
        expect(wrapper.emitted('pokemonSelected')[1]).toStrictEqual([2])
        expect(wrapper.emitted('pokemonSelected')[2]).toStrictEqual([3])
        expect(wrapper.emitted('pokemonSelected')[3]).toStrictEqual([4])

    });
});