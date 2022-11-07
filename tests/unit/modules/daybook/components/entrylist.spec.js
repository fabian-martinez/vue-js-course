import { createStore } from "vuex";
import { shallowMount } from "@vue/test-utils";

// import { getEntriesByTerm } from "@/modules/daybook/store/journal/getters"

import EntryList from "@/modules/daybook/components/EntryList.vue";
import { journalState } from "../../../mock-data/test-journal-state";
import journal from "@/modules/daybook/store/journal";

describe('Prueba el componente entryList', () => {
    
    // // Configuración un store para pruebas que permite crear solo lo necesario para la prueba 
    // const journalMockModule = {
    //     namespaced: true,
    //     getters: {
    //         // getEntriesByTerm = jest.fn()
    //         getEntriesByTerm
    //     },
    //     state: () => ({
    //         isLoading: false,
    //         entries: journalState.entries
    //     })
    // }
    // const store = createStore({
    //     modules:{
    //         journal: { ...journalMockModule }
    //     }
    // })

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

    let wrapper

    beforeEach(() => {
        jest.clearAllMocks() 
        wrapper = shallowMount(EntryList, {
            global:{
                mocks: {
                    $router: mockRouter
                },
                plugins: [ store ]
            }
        })  
    }) 


    it('Debe llamar al metodo getEntriesByterm vacio y traer 2 entradas', () => {
        expect( wrapper.findAll('entry-stub').length).toBe(2)
    });

    it('Debe llamar al metodo getEntriesByTerm y filtrar', async() => {
        const input = wrapper.find('input')
        await input.setValue('Segunda') 

        expect( wrapper.findAll('entry-stub').length).toBe(1)
    });

    it('El boton de nuevo debe redirigir a new', () => {
        const buttonNew = wrapper.find('button')

        buttonNew.trigger('click')
        expect( mockRouter.push ).toHaveBeenCalled()
        expect( mockRouter.push ).toHaveBeenCalledWith({ name: 'entry', params: { id: 'new' }})
    });
});