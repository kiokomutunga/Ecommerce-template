type itemprops = {
    features:{
        name: string
        price:number
        brand: string

    }
}

const Sales = (props: itemprops) =>{
    return(
        <div>
            <h3>
                the sale of {props.features.name} with the price of {props.features.price} made by {props.features.brand}

            </h3>
        </div>
    )

}
 export default Sales;