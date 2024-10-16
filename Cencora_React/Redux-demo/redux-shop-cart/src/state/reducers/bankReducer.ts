import { Action } from "../actions";
import { ActionType } from "../action-types";
import { act } from "react";
const initialSatate=0;

const reducer=(state:number=initialSatate,action:Action)=>{
  switch(action.type){
    case ActionType.DEPOSITE:
      return state+action.paylaod;
    case ActionType.WITHDRAW:
      return state-action.paylaod;
    case ActionType.BANKRUPT:
      return 0;
    default:return state;      
  }
}

export default reducer;