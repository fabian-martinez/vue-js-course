export const incrementRandom = async ( { commit } ) => {
    commit( 'setLoading', true )
    const randomInt = await getRandomInt()
    commit( 'incrementByAValue', randomInt )
    commit( 'setLoading', false )            
}