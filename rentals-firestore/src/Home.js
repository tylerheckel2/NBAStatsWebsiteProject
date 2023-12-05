import React from "react";
import {database} from './firebase'
import {useNavigate} from "react-raouter-dom";

function HomeScreen(){
    const history = useNavigate()

    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val, "val" )
            history('/')
        })
    }
 
    return(
        <div>
            <h1>Home</h1>
            <button onClick={handleClick}>SignOut</button>
        </div>
    )
}
export default HomeScreen;