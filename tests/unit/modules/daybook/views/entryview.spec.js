import { createStore } from "vuex";
import { shallowMount } from "@vue/test-utils";

import Swal from 'sweetalert2'

import { journalState } from "../../../mock-data/test-journal-state";
import journal from "@/modules/daybook/store/journal";

import EntryView from "@/modules/daybook/views/EntryView.vue";
 

jest.mock('sweetalert2', () => ({
    showLoading: jest.fn(),
    fire: jest.fn(), 
})) 

describe('Pruebas del EntrieView', () => {
    
    const mockRouter = { 
        push: jest.fn() 
    }

    const createVuexStore = (initialState) => 
        createStore({
            modules: {
                journal: {
                    ...journal,
                    state: { ...initialState }
                }
            }
        })

    const store = createVuexStore(journalState)
    store.dispatch = jest.fn() 

    let wrapper

    beforeEach(() => {
        jest.clearAllMocks() 
        wrapper = shallowMount(EntryView, {
            props:{
                id:'-NGDwnVJ0duTetAhtLMB'
            },
            global:{
                mocks: {
                    $router: mockRouter
                },
                plugins: [ store ]
            }
        })  
    })  

    it('Debe sacar al usuario si el id no existe', () => {
        const wrapper = shallowMount(EntryView, {
            props:{
                id: 'ID-NO-EXISTE'
            },
            global:{
                mocks: {
                    $router: mockRouter
                },
                plugins: [ store ]
            }
        })
        
        expect( mockRouter.push ).toHaveBeenCalledWith({ name: 'no-entry' })
    });

    it('Debe mostrar la entrada correctamente', () => {
        expect(wrapper.html()).toMatchSnapshot()
        expect(mockRouter.push).not.toHaveBeenCalled() 
    });

    it('debe borrar la entrada y salir', async() => {
        Swal.fire.mockReturnValueOnce( Promise.resolve({ isConfirmed: true }) )
        await wrapper.find('.btn-danger').trigger('click')

        expect( Swal.fire ).toHaveBeenCalledWith({
            title:'¿Esta seguro de borrar esta entrada?',
            text: 'Una vez borrada no se puede recuperar',
            showDenyButton:true,
            confirmButtonText:'Si, estoy seguro'
        })

        expect( store.dispatch ).toHaveBeenCalledWith("journal/deleteEntry", "-NGDwnVJ0duTetAhtLMB")
        expect( mockRouter.push ).toHaveBeenCalled()

    });
});