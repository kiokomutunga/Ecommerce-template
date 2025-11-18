import { useState } from "react";

type AuthUser = {
    name                      : string
    email                     : string
} //object structure to hold properties of the user.

const User = ()=>{

    const [user, setUser]   = useState< AuthUser | null>(null); // typescript is complaining when the value is set to null
    //the user can either be null or Authuser

    const isloggedin          = () => {
        setUser ({
            name: "kioko",
            email:"kio@ic.com"
        })
 // set the values and allow typescript to use the passed in values and having to set the value null to the default one
    }

    const isloggedout = () => {
        setUser(null) // when user logges out the system detects no user so it sets user to null

    }


    return(
        <>
        <div>
            <button onClick   = {isloggedout}>log out</button>
            <button onClick   = {isloggedin}> login in</button>

            <div>
                your name is {user?.name} 
                {/* typescript complains because the user can be null to avoid you use the ? before the call of the property*/}
            </div>
            <div>
                your email is {user?.email}
            </div>
        </div>

        

        </>

    );



}

export default User;