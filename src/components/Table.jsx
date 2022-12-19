import { TableHeader } from "./TableHeader"
import { TableBody } from "./TableBody"


export function Table (props) {

    const {products} = props
    console.log('PRODUCTOS TABLE', products)
    // console.log('DATA PROPS DEL FEED', props)
    // async function products () {
    //     const products = await getProducts(`${url}products`)
    //     console.log('PRODUCTS FEED>>>>', products )
    // }

    return (
        <table>
            <TableHeader products={products} />
            <TableBody products={products}/>
        </table>
    )
}