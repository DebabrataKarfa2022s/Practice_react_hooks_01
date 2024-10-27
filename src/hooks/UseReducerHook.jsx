import React, { useContext, useId, useMemo, useReducer } from 'react'
import { AppContext, AppProvider } from './UseContextHook'
import Countl from '../components/Countl'

const UseReducerHook = () => {

    const id = useId()
    

    // const reducer= (state, action)=>{
    //     if(action.type==="increment"){
    //         return state+2;
    //     }
    //     if(action.type==="decrement"){
    //         return state-2;
    //     }
    //     if(action.type==="reset"){
    //         return state=0;
    //     }

    // }

    // const [count , dispatch] = useReducer(reducer, 0)

    const initalState= {
        count : 0,
        double:1
    }

    const reducer =(state, action)=>{
        switch(action.type){
            case "increment":{
                return {
                    count: state.count+2,
                    double:state.double+4
            }
            }
            case "decrement":{
                return {
                    count: state.count-2,
                    double:state.double-4
            }
            }
            case "reset":{
                return {
                    count: 0,
                    double:1
            }
            }

        }
    }

const [state, dispatch] = useReducer(reducer, initalState)

// const {name, city} = useContext(AppContext) 
const data= useContext(AppContext) 


// const bioData = {
//     name  : "debabrata",
//     age:22
// }

const bioData = useMemo(()=>{
    return {
        name  : "debabrata",
        age:22
    }
},[])
   

  return (
    <div>
        {/* <h1>my name is {name} and fron {city} , and my id is  {id}</h1> */}
        <h1>my name is {data.name} and fron {data.city} , and my id is  {id}</h1>
        <p> {state.count}</p>
        <p> {state.double}</p>
        <button onClick={()=>dispatch({type:"increment"})} style={{font:'32px' ,backgroundColor:"green" , marginRight:"10px"}}>+</button>
        <button onClick={()=>dispatch({type:"decrement"})} style={{font:'32px' ,backgroundColor:"red", marginRight:"10px"}}>-</button>
        <button onClick={()=>dispatch({type:"reset"})} style={{font:'32px' ,backgroundColor:"blue"}}>Reset</button>
      <h1>use reducer hook</h1>

      <Countl bioData={bioData}/>  
    </div>
  )
}

export default UseReducerHook
