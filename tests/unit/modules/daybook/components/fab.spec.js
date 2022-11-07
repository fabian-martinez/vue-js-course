 import { shallowMount } from '@vue/test-utils'
 import Fab from '@/modules/daybook/components/Fab'

 describe('Pruebas del componente FAB', () => {
    it('Debe mostrar el icono por defecto', () => {
        const wrapper = shallowMount( Fab )
        const iTag = wrapper.find('i')

        expect( iTag.classes('fa-plus') ).toBeTruthy()
        //fa-plus
    });
    it('Debe mostrar el icono por argumento', () => {
        const wrapper = shallowMount( Fab, {
            props:{
                icon: 'fa-save'
            }
        } )
        const iTag = wrapper.find('i')

        expect( iTag.classes('fa-save') ).toBeTruthy()
        
        //fa-circle
    });
    it('Debe emitir evento on:click cuando hace click', () => {
        const wrapper = shallowMount( Fab )
        
        wrapper.find('button').trigger('click') 
        expect(wrapper.emitted('on:click')).toHaveLength(1)
    });
 });