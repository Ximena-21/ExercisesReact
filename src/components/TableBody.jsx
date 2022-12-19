import { TableRow } from "./TableRow"

export function TableBody (props) {

    const {products} = props

    return (
       <tbody>
            <TableRow products ={products}/>
       </tbody>
    )
}