import { createStore } from "vuex";

import journal from "@/modules/daybook/store/journal";
import { journalState } from "../../../../mock-data/test-journal-state";

const idToTest = "-NGDwnVJ0duTetAhtLMB"

const createVuexStore = (initialState) => 
    createStore({
        modules: {
            journal: {
                ...journal,
                state: { ...initialState }
            }
        }
    })

describe('Pruebas del modulo Journal', () => {
    
    it('Debe tener el estado inicial', () => {
        const store = createVuexStore( journalState )
        const  { isLoading, entries } = store.state.journal
        
        expect( isLoading ).toBeFalsy()
        expect( entries ).toEqual(journalState.entries)
    });


    //============= Testing Mutations
    
    it('mutations: setEntries', () => {
        const store = createVuexStore({ isLoading: true, entries: [] })

        store.commit('journal/setEntries',  journalState.entries ) 

        expect( store.state.journal.entries.length ).toBe(2)
        expect( store.state.journal.isLoading ).toBeFalsy()
    });
    
    it('mutations: updateEntry', () => {

        const store = createVuexStore( journalState )
        const storedEntries = store.state.journal.entries
        const updatedEntry = {
            id:idToTest,
            date: "Sun Oct 23 2022 10:56:24 GMT-0500 (-05)",
            text: "Entrada actualizada"
          }

        store.commit('journal/updateEntry',  updatedEntry ) 

        expect( storedEntries.length ).toBe(2) 
        expect( 
            storedEntries.find( entry => entry.id === updatedEntry.id )
            ).toEqual(updatedEntry) 
    });
    
    it('mutations: addEntry', () => {

        const store = createVuexStore( journalState )
        const newEntry = {
            id:idToTest,
            date: "Sun Oct 23 2022 11:16:25 GMT-0500 (-05)",
            text: "Esta es una nueva entrada para pruebas unitarias"
        }
        
        store.commit('journal/addEntry',  newEntry ) 
        
        const storedEntries = store.state.journal.entries
        expect( storedEntries.length ).toBe(3) 
        expect( 
            storedEntries.find( entry => entry.id === newEntry.id )
            ).toBeTruthy() 
    });

    it('mutations: deleteEntry', () => {

        const store = createVuexStore( journalState )
        const idEntryToDelete = idToTest
        
        store.commit('journal/deleteEntry',  idEntryToDelete ) 
        
        const storedEntries = store.state.journal.entries
        expect( storedEntries.length ).toBe(1) 
        expect( 
            storedEntries.find( entry => entry.id === idEntryToDelete )
            ).toBeFalsy()
    });

    //============= Testing Getters

    it('getters: getEntriesByTerm ', () => {
        const store = createVuexStore( journalState )
        
        expect( store.getters['journal/getEntriesByTerm']('').length ).toBe(2)
    });

    it('getters: getEntriesByTerm "Segunda"', () => {
        const store = createVuexStore( journalState )
        const [entri1, entry2] = journalState.entries
        
        expect( store.getters['journal/getEntriesByTerm']('Segunda').length ).toBe(1)
        expect( store.getters['journal/getEntriesByTerm']('Segunda') ).toEqual([ entry2 ])
    });

    it('getters: getEntryById', () => {
        const store = createVuexStore( journalState )
        const [entry1, entry2] = journalState.entries
        const idToFind = idToTest
        
        // expect( store.getters['journal/getEntryById'](idToFind).length ).toBe(1)
        expect( store.getters['journal/getEntryById'](idToFind) ).toEqual( entry1 )
    });

    // ============== testing Actions
    it('actions: loadEntries', async() => {
        const store = createVuexStore({ isLoading: true, entries: [] })

        await store.dispatch('journal/loadEntries')

        expect( store.state.journal.entries.length ).toBe(2)
    });

    it('actions: loadEntries', async() => {
        const store = createVuexStore({ isLoading: true, entries: [] })

        await store.dispatch('journal/loadEntries')

        expect( store.state.journal.entries.length ).toBe(2)
    });
    
    it('actions: updateEntry', async() => {
        const store = createVuexStore( journalState )

        const entryNotNessesaryInfo = {
            id: "-NGDwnVJ0duTetAhtLMB",
            date: "Sun Nov 06 2022 16:57:46 GMT-0500 (-05)",
            text: "Entrada actualizada",
            other: 12345
        }
        await store.dispatch('journal/updateEntry', entryNotNessesaryInfo )

        expect( store.state.journal.entries.length ).toBe(2)
        expect( store.state.journal.entries.find( entry => entry.id === entryNotNessesaryInfo.id) )
                .toEqual({
                    id: "-NGDwnVJ0duTetAhtLMB",
                    date: "Sun Nov 06 2022 16:57:46 GMT-0500 (-05)",
                    text: "Entrada actualizada"
                })
    });
    
    it('actions: createEntry and deleteEntry', async() => {
        const store = createVuexStore( journalState )

        const entryNotNessesaryInfo = {
            date: "Sun Nov 06 2022 16:57:46 GMT-0500 (-05)",
            text: "Entrada Creada",
            other: 12345
        }
        const createdEntryId = await store.dispatch('journal/createEntry', entryNotNessesaryInfo )

        expect( typeof createdEntryId ).toBe("string")
        expect( store.state.journal.entries.length ).toBe(3)
        expect( store.state.journal.entries.find( entry => entry.id === createdEntryId) )
                .toEqual({
                    id: createdEntryId,
                    date: "Sun Nov 06 2022 16:57:46 GMT-0500 (-05)",
                    text: "Entrada Creada"
                })
        
        await store.dispatch('journal/deleteEntry', createdEntryId )
        
        expect( store.state.journal.entries.length ).toBe(2)
        expect( 
            store.state.journal.entries.find( entry => entry.id === createdEntryId )
            ).toBeFalsy() 
        
    });
});