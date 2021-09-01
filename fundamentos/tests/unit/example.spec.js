//TestSuit
describe( 'Example Component', () => {
  test( 'Debe ser mayor a 10', () => {
    
    // Arrage
    let value = 5

    //Act
    value = value + 2 
    
    //Assert
    if( value > 10 ){
      //TODO: todo bien
    }else{
      throw `${value} no es mayor a 10`
    }

  } )
} )