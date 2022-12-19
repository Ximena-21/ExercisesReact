export function filterKeys(arrFilter, array) {

    // console.log({
    //     disponible: arrFilter,
    //     filtrar: array
    // })
    const newListProduct = array.map((element) => {
        // console.log('objeto dal array', element)
        return Object.keys(element)
            .filter((key) => {
                if (arrFilter.some(keyFilter => key.includes(keyFilter))) {
                    return key
                }
            })
            .reduce((obj, key) => {
                return Object.assign(obj, {
                    [key]: element[key]
                })
            }, {})

    })

    // console.log('PRODUCTOS FILTRADOS', newListProduct)
    return newListProduct
}

//tengo un arraydeLlaves Filtradas, luego hago un map, y porcaa key pinto un th