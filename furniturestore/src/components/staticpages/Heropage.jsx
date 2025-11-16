import {useState} from "react";


const HeroSection = () =>{
    const images =[]

    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);

    }

    const decrement = ()=>{
        setCount(count -1 );
    }

    const reset = ()=>{
        setCount(0);
    }


    return(
        <div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrementt</button>
            <button onClick={reset}>reset</button>
            <h1>{count}</h1>

        </div>

    );

}

export default HeroSection;