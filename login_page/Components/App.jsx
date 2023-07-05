import React from "react";
import Login from "./Login";

// var isLogIn = false;
// const time = new Date(2023,1,1,13).getHours();

// function renderConditionally()
// {
//     if(isLogIn)
//     {
//         return(<h1>Hi Welcome to the application</h1> );
//     }
//     else{
//         return( <Login /> );
//     }
// }

var isRegistered=false;
function App() {
    return (
        <div className="Container">
            {/* {isLogIn ? <h1>Hi Welcome to the application</h1> : <Login />} */}
            {/* {time >12 ? <h1>Why are you Working</h1> : <h1>Work Hard</h1>} */}
            {/* {time >12 ? <h1>Why are you Working</h1> : null} */}
            {/* {time >12 && <h1>Why are you Working</h1>} */}
            <h1>Hi Welcome</h1>
            <Login reg={isRegistered} />

        </div>
    );

}

export default App;