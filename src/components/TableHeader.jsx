import { filterKeys } from "../lib/helpers"

export function TableHeader(props) {

    const { products } = props

    const avaliablesKeys = ['id', 'image', 'name', 'price']

    const filterRows = filterKeys(avaliablesKeys, products)

    const columnsHeader = filterRows.map((elementHeader) => {
        console.log('column header', Object.keys(elementHeader))
        return Object.keys(elementHeader)
    })

    const colums = columnsHeader[0] || avaliablesKeys

     console.log('keys columns', colums)


    return (
        <thead>
            <tr>
                {
                    colums.map((key)=>{
                        return (
                            <th>{key}</th>
                        )
                    })
                }
                {/* <th>id</th>
                <th>image</th>
                <th>product</th>  */}
            </tr>
        </thead>
    )
}