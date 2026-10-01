import React from "react";
function App(){
  let count = 10
  function IncreaseCount(){
    count = count + 1
    console.log(count)
  }


  return(
        <div>
           <h2>Like/Cart : {count} </h2>
           <button onClick={IncreaseCount}>Increase</button>
        </div>

  )
}
export default App