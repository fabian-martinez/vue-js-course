import Counter from "@/components/Counter"
import { shallowMount } from "@vue/test-utils";

describe('Counter component testSuit', () => {

    // test('Debe hacer match con el snapshot', () => {

    //     const wrapper = shallowMount(Counter)

    //     expect(wrapper.html()).toMatchSnapshot()
    // });

    test('h2 debe tener valor por defecto', () => {

        const wrapper = shallowMount(Counter)

        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2')

        expect(h2Value.text()).toBe('Counter')

    });

    test('el valorpor defecto para la etiqueta p', () => {
        const wrapper = shallowMount(Counter)
        const pTag = wrapper.find('[data-testid="counter"]')

        expect(pTag.text()).toEqual('100')


    });

    test('Debe incrementar y decrementar el valor del contador en 1', async() => {
        const wrapper = shallowMount(Counter)
        const counterBtns = wrapper.findAll('button')

        await counterBtns[0].trigger('click')
        await counterBtns[0].trigger('click')
        await counterBtns[0].trigger('click')
        await counterBtns[1].trigger('click')
        await counterBtns[1].trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('101')
    });
});