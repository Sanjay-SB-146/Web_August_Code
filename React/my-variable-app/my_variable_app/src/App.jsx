//import React from "react";
//
//function App(){
//  let count = 10
//  function IncreaseCount(){
//      count = count + 1
//      console.log(count)
//  }
//
//  return(
//    <div>
//       <h2>Like/Cart : {count} </h2>
//       <button onClick = {IncreaseCount}>Increase</button>
//    </div>
//  )
//}
//
//export default App

// useStte() -> Hook in react 
//It is a SPECIAL React variable - it will store the updated value and also it will update the data value on ui-screen
//Syntax - const [mainVariable - show on screen ,setVariable - store updated value] = useState(initial value)

//import React from "react";
//import {useState} from "react";

//function App(){
//  const [like , setLike] = useState(17)
//  function IncreaseLike(){
//    setLike(like + 1)
//    console.log(like)
//  }
  
//  return(
//    <div>
//       <h2>Like/Cart : {like} </h2>
//       <button onClick={IncreaseLike}>Increase</button>
//    </div>
//  )
//}
//export default App

// Example 3 - 

//import React from "react";
//import {useState} from "react";

//function App(){
//  const [show,setShow] = useState(false)
//  return(
//    <div>
//       <input type={show ? "text" : "password"}placeholder="Enter your password" />
//       <button onClick={()=> setShow(!show) }>Show/Hide</button>
//    </div>
//  )
//}
//export default App

// Example 4 -

//import React from "react";
//import {useState} from "react";

//function App(){
//  const [follow, setFollow] = useState(false)
//  return(
//    <div>
//      <button onClick={()=> setFollow(!follow)}>{follow ? "Following" : "Follow"}</button> 
//    </div>
//  )
//}
//export default App

//Example 5 -

import React from "react";
import {useState} from "react";
import Addbtn from "./AddCart"

function App(){
  const [login, setLogin] = useState(false)
  return(
    <div>
      <button onClick={()=> setLogin(!login)}>{login ? "LogOut" : "LogIn"}</button>
      <br></br> <br></br>
      <Button />
    </div>
  )
}
export default App
