import { ActionType } from "../action-types";
import {Action,Dispatch} from "redux";

export const depositeMoney=(amount:number)=>{
  return(dispatch:Dispatch<Action>)=>{
    dispatch({
      type:ActionType.DEPOSITE,
      paylaod:amount
    })
  }
}
export const WithdrawMoney=(amount:number)=>{
  return(dispatch:Dispatch<Action>)=>{
    dispatch({
      type:ActionType.WITHDRAW,
      paylaod:amount
    })
  }
}

export const BankruptMoney=()=>{
  return(dispatch:Dispatch<Action>)=>{
    dispatch({
      type:ActionType.WITHDRAW,
      // paylaod:amount
    })
  }
}