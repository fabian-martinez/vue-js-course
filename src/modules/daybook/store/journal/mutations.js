export const setEntries = ( state, entries ) => {
    state.entries = [ ...state.entries, ...entries ] // concatenar valores viejos con valores nuevos
    state.isLoading = false // establecer que ya se cargo la pagina
}
export const updateEntry = (state, updatedEntry) => {
    const index = state.entries.findIndex( entry => entry.id === updatedEntry.id)
    state.entries[index] = updatedEntry
}
export const addEntry  = (state, newEntry) => {
    state.entries = [ newEntry, ...state.entries]
}
export const deleteEntry = (state, idEntry) => {
    // const index = state.entries.findIndex( entry => entry.id === idEntry)
    // state.entries.splice(index, 1)
    state.entries = state.entries.filter( entry => entry.id !== idEntry)
}