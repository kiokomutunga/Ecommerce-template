import {useState, useEffect} from "react";

function ScreenSize(){
    const [width, setWidth] = useState(window.innerWidth);

    const [height, setHeight] = useState(window.innerHeight);

    useEffect(
        () =>{
            windows.addEventListener("resize", handleResize);
            console.log("added event listener");

            return () =>{
                window.removeEventListener("resize", handleResize);
                console.log("removed event listener");
            }


        },[]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }




}