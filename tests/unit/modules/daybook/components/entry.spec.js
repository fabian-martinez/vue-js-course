import { shallowMount } from "@vue/test-utils";
import Entry from "@/modules/daybook/components/Entry.vue";
import { journalState } from "../../../mock-data/test-journal-state";


describe('Pruebas en el componente Entry', () => {

    const mockRouter = { push: jest.fn() }
    const wrapper = shallowMount(Entry, {
        props: { entry: { ...journalState.entries[0] }},
        global:{ mocks: { $router: mockRouter }}
    }) 

    it('debe hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    });

    it('deber redireccionar al hacer click en el entry-container', () => {

        const entryThunmail = wrapper.find('.entry-container')

        entryThunmail.trigger('click')

        expect( mockRouter.push ).toHaveBeenCalled()
        expect( mockRouter.push ).toHaveBeenCalledWith({ name: 'entry', params: {id:journalState.entries[0].id} })

    });

    it('pruebas en las propiedades computadas', () => {

        expect(wrapper.vm.weekDay).toEqual('domingo')
        expect(wrapper.vm.day).toEqual(6);
        expect(wrapper.vm.month).toEqual('noviembre')
        expect(wrapper.vm.year).toEqual(2022)
        // wrapper.vm. <--- popiedades computadas 
    });

});