import React from 'react'
import "../components/style.css"
import {useSelector,useDispatch} from "react-redux"
import {incNumber,decNumber} from "../actions/action"

function Counter() {
  const myState = useSelector((state)=>state.changeNumber)
  const dispatch = useDispatch();
  return (
    <>
      <div className="counter_main">
      <h1>Increament/Decreament</h1>
      <h3>Using React and Redux</h3>
      <div className="counter_in">
        <a onClick={()=>dispatch(decNumber())}><button> - </button></a>
        <span>{myState}</span>
        <a onClick={()=>dispatch(incNumber())}><button> + </button></a>
      </div>
      </div>
    </>
  )
}

export default Counter