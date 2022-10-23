import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'


export function Feed() {

    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(false)


    useEffect(()=>{
        getProducts()
    }, [])

    async function getProducts() {
        setLoading(true)
        const req = await fetch ('https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/products')
        const data = await req.json()

        setTimeout(() => {
            setLoading(false)
            setProducts(data)
            
        }, 2000);

    }

    return (
        <div>
            <h1>Feed</h1>

            <Header/>

            <div>
                <button>Productos</button>
                <button>Usuarios</button>
            </div>


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
