import { shallowMount } from '@vue/test-utils';
import HomeView from '@/views/HomeView';

describe('Pruebas en el Home view', () => {
    it('debe de hacer match con el snapshop cuando cargen el home', () => {
        const wrapper = shallowMount(HomeView)

        expect(wrapper.html()).toMatchSnapshot()
    });

    it('Hacer click en boton que redirecciona a no-entry', () => {
        const mockRouter = {
            push: jest.fn()
        }

        const wrapper = shallowMount( HomeView, {
            global:{
                mocks: {
                    $router: mockRouter
                }
            }
        })

        wrapper.find('button').trigger('click')

        expect( mockRouter.push ).toHaveBeenCalled()
        expect( mockRouter.push ).toHaveBeenCalledWith({ name: 'no-entry'}) 

    });
});