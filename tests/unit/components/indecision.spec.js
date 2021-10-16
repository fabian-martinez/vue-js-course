import Indecision from "@/components/Indecision.vue";
import { shallowMount } from "@vue/test-utils";

describe('', () => {

    let wrapper
    let clgSpy

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console, 'log')
        jest.clearAllMocks()
    })

    test('debe hacer match con el Snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    });

    test('no debe disparar getAnswer pero dispare el log', async() => {

        //Arrange
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        //Act
        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')

        //Assert
        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).not.toHaveBeenCalled()
    });

    test('escribir el "?" debe fisparar el getAnswer e imprimir log', async() => {

        //Arrange
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        //Act
        const input = wrapper.find('input')
        await input.setValue('?')

        //Assert
        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalledTimes(1)
    });

    test('prueba el getAnswer', async() => {

        //Act
        await wrapper.vm.getAnswer()

        //Asset
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('Si')
    });

    test('pruebas de getAnswer falle', () => {
        //TODO
        console.log('prueba que falla el answer');
    });
})