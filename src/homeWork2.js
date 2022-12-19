const tienda = {
    name: 'Tienda de Yango',
    category: {
        food: [
            { nameProduct: 'chocolate', price: 2000, stock: 10 },
            { nameProduct: 'leche', price: 3000, stock: 15 },
            { nameProduct: 'aceite', price: 8000, stock: 10 },
            { nameProduct: 'queso', price: 9000, stock: 5 },
        ],
        cleanliness: [
            { nameProduct: 'sanpic', price: 2500, stock: 20 },
            { nameProduct: 'varsol', price: 5000, stock: 18 },
            { nameProduct: 'jabon polvo', price: 4500, stock: 10 },
        ],
    }
}

const foodProducts = tienda.category['food']
const avaliablesKeys = ['nameProduct', 'price' ]

const newListProduct = foodProducts.map((product) => {

    return Object.keys(product)
        .filter((key) => {
            if (avaliablesKeys.some(keyS => key.includes(keyS))){
                return key
            }
        })
        .reduce((obj, key) => {
            return Object.assign(obj, {
                [key]: product[key]
            })
        }, {})
})

console.log(newListProduct)