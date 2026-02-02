//////////////////////////////  PROPS EXAMPLE  ////////////////////////////////



// import User from './user.jsx'
// import React from 'react'

// const App = () => {


//   const userData = {
//     name : "Kiruthick",
//     age : 21,
//     email : "kiruthick@test.com"
//   }


//   return (
//     <div>
//       <User name={userData.name}/>
//       <h1>Test mail : {userData.email}</h1>


//     </div>
//   )
// }

// export default App


//////////////////////////////  USESTATE EXAMPLE  ////////////////////////////////

// import React, {useState} from 'react'

// const App = () => {
//   const [num, setNum] = useState(1)



//  const clickHandler = () =>{

//   setNum (() =>{
//     return num + 1
//   });

//  }

//   return (
//     <div>
//       <button onClick={clickHandler}>add</button>
//       <h1>{num}</h1>
//     </div>
//   )
// }

// export default App

///////////////////////////////  USEEFFECT EXAMPLE  ////////////////////////////////

// bcoz of not using statehook for num1 , its not rendered. 

// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(1)
//   let num1 = 1;

//   useEffect(
//     () =>{
//       console.log("useEffect called");
//       num1 = num ;
//       console.log("num1 :", num1);
//     }, [num, num1]
//   )

//   return (
//     <div>
//        <h1>num1 : {num}</h1>
//        <h1>num2 : {num1}</h1>
//        <button onClick={ () => setNum( num + 1) }>add</button>
//     </div>
//   )
// }

// export default App

////////////////////////////////  INPUT EXAMPLE  ////////////////////////////////

// import React, {useState} from 'react'

// const App = () => {

//   const [input, setInput] = useState("")

 

//   return (
//     <div>
//       <h1>Input</h1>
//       <input type="text"
      
//       onChange={(e)=>setInput(e.target.value)} />
//       <h1>{input}</h1>

//     </div>
//   )
// }

// export default App

//////////////////////////////  INPUT SHOW EXAMPLE  ////////////////////////////////

//16 - times rendered, so we can optimize it by using useEffect


// import React,{useState} from 'react'

// const App = () => {

//   const [input, setInput] = useState("")
//   const [show, setShow] = useState("")

//   console.log("rendered");

//   function how(){
//     setShow(input);
    
//   }

//   return (
//     <div>

//       <h1>Input</h1>
//       <input type="text"
//       onChange={(e) => setInput(e.target.value)} />
//       <h2>{show}</h2>
//       <button onClick={how}>show</button>
//     </div>
//   )
// }

// export default App

//////////////////////////////  USEREF EXAMPLE  ////////////////////////////////

// import React, {useState, useRef} from 'react'

// const App = () => {

//   const [input, setInput] = useState("")
//   const inputref = useRef("");
//   console.log("rendered");

//   function show(){
//     setInput(inputref.current.value);
//   }

//   return (
//     <div>
//       <h1>Input</h1> expla
//       <input type="text" ref={inputref} />
//       <button onClick={show}>print</button>
//       <h1>{input}</h1>
//     </div>
//   )
// }

// export default App

//////////////////////////////////////////// useMemo EXAMPLE  ////////////////////////////////////////////


// import React from 'react'
// import { useState, useMemo, useRef} from 'react'

// const App = () => {

//     const [num, setNum] = useState(0)

//     console.log("rendered");

//     function slow( num ){
//         for ( let i = 0; i < 1000000000; i++){}
        
//         return num*2;
//     }

//     const inputRef = useRef(
//         null
//     )

//     const doubleNum= useMemo( () =>{
//         return slow(num)
//     },[num])

//   return (
//     <div>
      
//         <h1>useMemo Example</h1>
//         <input type="number"
//         ref={inputRef}
//          />
//         <button onChange={(e) => setNum(parseInt(inputRef.current.value)) && slow}>
//             Double
//         </button>
//         <h2>{num}</h2>

//     </div>
//   )
// }

// export default App


//////////////////////////////  USEREDUCER EXAMPLE  ////////////////////////////////

import React, {useReducer} from 'react'


function reducer ( state, action){
    switch ( action.type){
        case 'INCREMENT' :
            return { value : state.value + 1}
        case 'DECREMENT':
            return { value : state.value - 1}
        default:
            return {value : 0}
    }
}


const App = () => {

    const [ state, dispatch] = useReducer( reducer, { value : 1})


const increment = () =>{
    dispatch( { type : 'INCREMENT'} )
}

const decrement = () =>{
    dispatch( {type : 'DECREMENT'} )
}

  return (
    <div>
        <h1>Use Reduce Example</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <h1>{state.value}</h1>
    </div>
  )
}

export default App


