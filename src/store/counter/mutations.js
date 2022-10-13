export const increment = ( state ) => {
    state.count++
    state.lastMutation = 'increment'
}

export const incrementByAValue = ( state, value ) => {
    state.count += value
    state.lastMutation = `increment ${value}`
    state.lastValue = value
}

export const setLoading = ( state, isLoading ) => {
    state.isLoading = isLoading
    state.lastMutation = 'is loading'
}