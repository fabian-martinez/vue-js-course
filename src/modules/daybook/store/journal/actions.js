import journalApi from "@/api/journalApi"

export const loadEntries = async ({commit}) => {
     const { data } = await journalApi.get('/entries.json')
     const entries = []
     if (data){
        for (const id of Object.keys( data )) {
            entries.push({
                id,
                ...data[id]
            })
         }
     }
     console.log(`Fueron cargadas ${entries.length} entradas`);
     commit('setEntries',entries)
}
export const updateEntry = async ({commit}, entry) => {
    const { date, text, picture } = entry
    
    await journalApi.put(`/entries/${entry.id}.json`,{ date, text, picture })
    
    console.log(`Entrada ${entry.id} fue actualizada`);
    commit( 'updateEntry',entry )
}
export const createEntry = async ({commit}, entry) => {
    const { date, text, picture } = entry
    const dataToSave = { date, text, picture }
    
    const { data } = await journalApi.post('/entries.json', dataToSave)
    
    entry.id = data.name
    console.log(`Entrada ${entry.id} fue creada`);
    commit( 'addEntry', entry )
    
    return data.name
}
export const deleteEntry = async ({commit}, id) => {
    await journalApi.delete(`/entries/${id}.json`)
    commit( 'deleteEntry', id )
    return id
}