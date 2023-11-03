import { createStore } from "vuex";

import { journalState } from "./test-journal-state";

import auth from '@/modules/auth/store/auth'
import journal from '@/modules/daybook/store/journal'

const createVuexStore = (initialAuthState, initialJournalState = journalState) => 
    createStore({
        modules: {
            auth: {
                ...auth,
                state: { ...initialAuthState}
            },
            journal: {
                ...journal,
                state: { ...initialJournalState }
            }
        }
    })

export default createVuexStore


