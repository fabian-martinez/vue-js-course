import Counter from "@/components/Counter"
import { shallowMount } from "@vue/test-utils";


describe('Counter component testSuit', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(Counter)
    });

    // test('Debe hacer match con el snapshot', () => {

    //     const wrapper = shallowMount(Counter)

    //     expect(wrapper.html()).toMatchSnapshot()
    // });

    test('h2 debe tener valor por defecto', () => {

        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2')

        expect(h2Value.text()).toBe('Counter')

    });

    test('el valorpor defecto para la etiqueta p', () => {

        const pTag = wrapper.find('[data-testid="counter"]')

        expect(pTag.text()).toEqual('100')


    });

    test('Debe incrementar y decrementar el valor del contador en 1', async() => {

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('101')
    });
});