import Indecision from "@/components/Indecision.vue";
import { shallowMount } from "@vue/test-utils";

describe('', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
    })

    test('debe hacer match con el Snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    });

    test('no debe disparar nada', () => {
        console.log('No debe disparar nada');
    });

    test('escribir el "?" debe fisparar el fetch', () => {
        console.log("disparar fetch");
    });

    test('prueba el getAnswer', () => {
        console.log('Prueba el getAnswer');
    });

    test('pruebas de getAnswer falle', () => {
        console.log('prueba que falla el answer');
    });
})