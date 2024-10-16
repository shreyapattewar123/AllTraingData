
import {Action,Dispatch} from "redux";
import { ActionType } from "../actions-type";

export const Addproduct=(amount:number)=>{
  return(dispatch:Dispatch<Action>)=>{
    dispatch({
      type:ActionType.ADD,
      paylaod:amount
    })
  }
}
export const Removeproduct=(amount:number)=>{
  return(dispatch:Dispatch<Action>)=>{
    dispatch({
      type:ActionType.REMOVE,
      paylaod:amount
    })
  }
}

