import { useDispatch } from 'react-redux'
import './App.css'
import { UseDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators ,state} from './state';
function App() {
const dispatch = useDispatch();
const {depositeMoney,WithdrawMoney,BankruptMoney} =bindActionCreators(actionCreators,dispatch);
const amount =useSelector((state:state)=>state.bank)
  return (
    <>
      <div className='App'>
        <h1>{amount}</h1>
        <button onClick={()=>depositeMoney(2000)}>Deposit</button>
        <button onClick={()=>WithdrawMoney(500)}>Withdraw</button>
        <button onClick={()=>BankruptMoney()}>Bankrupt</button>
 
      </div>
      </>
  )
}
 
export default App