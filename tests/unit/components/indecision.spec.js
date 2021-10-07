import Indecision from "@/components/Indecision.vue";
import { shallowMount } from "@vue/test-utils";

describe('', () => {

    let wrapper
    let clgSpy

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console, 'log')
    })

    test('debe hacer match con el Snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    });

    test('no debe disparar getAnswer pero dispare el log', async() => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')
        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).not.toHaveBeenCalled()
    });

    test('escribir el "?" debe fisparar el fetch', () => {
        //TODO
        console.log("disparar fetch");
    });

    test('prueba el getAnswer', () => {
        //TODO
        console.log('Prueba el getAnswer');
    });

    test('pruebas de getAnswer falle', () => {
        //TODO
        console.log('prueba que falla el answer');
    });
})