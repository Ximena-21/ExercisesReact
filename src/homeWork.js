const tienda = {
    name: 'Tienda de Yango',
    category: {
        food: [
            {nameProduct: 'chocolate', price: 2000, stock: 10},
            {nameProduct: 'leche', price: 3000, stock: 15},
            {nameProduct: 'aceite', price: 8000, stock: 10},
            {nameProduct: 'queso', price: 9000, stock: 5},
        ],
        cleanliness: [
            {nameProduct: 'sanpic', price: 2500, stock: 20},
            {nameProduct: 'varsol', price: 5000, stock: 18},
            {nameProduct: 'jabon polvo', price: 4500, stock: 10},
        ],
    }
}

const foodProducts = tienda.category['food']

const avaliablesKeys = ['nameProduct']

//iterar la lista de productos 
const newListProducts = foodProducts.map((product)=>{
    //devolver un array de c/ producto con sus llaves
   const arrProduct = Object.keys(product)

   //luego ese array filtrar, c/llave y si coincide con algun valor del array disponible, retornar esa llave
   //tbm podria hacerlo conun includes

    const filterKey = arrProduct.filter((key)=>{
       if( avaliablesKeys.some(keyS=> key.includes(keyS))){
        return key
       }
    })


//una vez tengo filtradas las llaves, con el metodo reduce, se reduce cada elemento del array a un unico valor 
  const productMod =  filterKey.reduce((obj, key) => {

            //copia las propiedades de un objeto
            const copyObjProduct = Object.assign(obj,{

                    [key]: product[key]
                })

            return copyObjProduct
         }, {})

         return productMod 
})
console.log(newListProducts)


function prependSum(nums){
    const sumP1y0 = nums[0]+nums[1]
    const arrayMod = nums.slice(2,nums.length)
    arrayMod.unshift(sumP1y0)
    
    console.log(arrayMod);
    return arrayMod
  
  }

prependSum([1,5, 2,4,4])