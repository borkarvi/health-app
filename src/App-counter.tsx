import React, { useState, useEffect, useReducer } from "react";
import "./App.scss";
const initialState = {count: 0, op: ''};

  function reducer(state: {count: number}, action:{type: string}) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1, op :'increment'};
      case 'decrement':
        return {count: state.count - 1, op : 'decrement'};
      default:
        throw new Error();
    }
  }
  


const App = ()  => {


  const [state, dispatch] = useReducer(reducer, initialState);

  // const [ count , setCount ] = useState(0)
  // const [ op , setOp ] = useState('');
  return (
    <div className="width100">
     <span>Blood Pressure</span>
      <>
      Count: {state.count}
      <br/>
      <br/>
      op : {state.op}
      <br/>
      <br/>

      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    
      <br/>
      <br/>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
   <br>
   </br>
   <h1>Date Check Up</h1>
   <br></br>
      <input type="date" /> Last Month


      <br></br>
      <input type="date"/> Current Month

    </> 
  </div>
  );
}

export default App;