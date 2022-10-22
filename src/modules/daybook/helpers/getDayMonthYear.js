
const getDayMonthYear = (date) => {

    return {
        weekday: new Intl.DateTimeFormat('es-CO', { weekday: 'long'})
                        .format(new Date(date)),
        day: new Date(date).getDate(),
        month: new Intl.DateTimeFormat('es-CO', { month: 'long'})
                        .format(new Date(date)),
        year: new Date(date).getFullYear()
    }

}

export default getDayMonthYear