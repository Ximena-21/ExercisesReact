import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Table } from '../components/Table'
import { getProducts } from '../lib/request'


const url = 'http://localhost:8080/' 

export function Feed() {

    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(false)


    useEffect(()=>{
        getListProducts()
    }, [])


    // archivo dfuera de src se llama .env y dentro ese archivo solo tiene lo de la url 
    async function getListProducts() {
        setLoading(true)
        const dataProducts = await getProducts(`${url}products`)

        setTimeout(() => {
            setLoading(false)
            setProducts(dataProducts)
            
        }, 2000);

    }

    return (
        <div>
            <Header/>


            <h1>Feed</h1>


            <div>
              
                <button>Productos</button>
                <button>Usuarios</button>
            </div>

            {<Table products={products}/>}
           {
                isLoading 
                ? <h1>...Loading</h1> 
                : products.map((product)=>{
                return (
                    <h1>{product.name}</h1>
                )
            })

           }

        </div>
  )
}
