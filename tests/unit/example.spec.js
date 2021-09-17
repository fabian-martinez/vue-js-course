//TestSuit
describe('Example Component', () => {
    test('Debe ser mayor a 10', () => {

        // Arrage
        let value = 10

        //Act
        value = value + 2

        //Assert
        expect(value).toBeGreaterThan(10)

    })
})