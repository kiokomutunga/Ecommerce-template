import Greet from "./components/greeting"
import Sales from "./components/topsales";
import ProductList from "./components/productlist";

function App () {                               
    const itemdetails = {
         name: "fielder",
         price: 120000 ,
         brand: "toyota",   
    }

    const productlist = [
        {
            name: "sofa",
            price: 60000,
            brand: "kenwood"
        },
        {
            name: "sofa",
            price: 60000,
            brand: "kenwood"
        },
        {
            name: "sofa",
            price: 60000,
            brand: "kenwood"
        },
        {
            name: "sofa",
            price: 60000,
            brand: "kenwood"
        },
        {
            name: "sofa",
            price: 60000,
            brand: "kenwood"
        },

    ]

    

    return(
        
        <div>
            <Greet name="aali" age={30}/>
            <Sales features={itemdetails}/>
            <ProductList featuress={productlist} />
        </div>
    )
}
export default App;
