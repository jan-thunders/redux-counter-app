import React from "react"; 
import { useDispatch, useSelector } from "react-redux";
import {increase, decrease,reset} from "../redux/actions/counterActions"


const CounterApp = () => {
  const count =  useSelector(state => state)  // helping u to get the currrent value from store
  

  const dispatch  = useDispatch()

  function handleIncrease(){
    dispatch(increase(100))
    // dispatch({type: INCREASE, value: 100})
  }


    return(
        <div>
          <h1> {count} </h1>
          <button onClick={handleIncrease}> Increase </button> 
        </div>
    )
}

export default CounterApp;