import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, state } from './state';

function App() {
  const dispatch = useDispatch();
  const {Addproduct,Removeproduct} =bindActionCreators(actionCreators,dispatch);
  const amount =useSelector((state:state)=>state.product)
    return (
      <>
        <div className='App'>
          <h1>{amount}</h1>
          <button onClick={()=>Addproduct(1)}>ADD</button>
          <button onClick={()=>Removeproduct(1)}>Remove</button>
          
   
        </div>
        </>
    )
  }
   
  export default App