import React from "react";
import {BrowserRouter} from "react-router-dom";
import RegisterAndLogin from "./registerAndLogin";

function PasswordLoginWithFirebase(){
    return(
    <BrowserRouter>
        <div>
            <Routes>
                <Route path = "/" element = {<RegisterAndLogin/>} />
                <Route path="/home" element ={<HomeScreen/>}/>
            </Routes>
        </div>
    </BrowserRouter>
    )
}
export default PasswordLoginWithFirebase;