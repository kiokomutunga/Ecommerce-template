type productlistprops = {
    featuress:{
        name: string,
        price: number,
        brand: string,
    }[]
}

const ProductList = (props: productlistprops) => {

    return(

        <div>
            {
                props.featuress.map((item)=>
                {
                    return(
                        <h2 key={item.name}>
                            the product {item.name} with the price of {item.price} made by {item.brand}
                        </h2>
                    )
                })
            }
            
         
         
        </div>

    )

}

export default ProductList;