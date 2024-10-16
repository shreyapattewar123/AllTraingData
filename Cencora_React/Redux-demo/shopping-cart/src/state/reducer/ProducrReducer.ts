import { Action } from "../actions";
import { ActionType } from "../actions-type";

const initialSatate=0;
const reducer=(state:number=initialSatate,action:Action)=>{
  switch(action.type){
    case ActionType.ADD:
      return state+action.paylaod;
    case ActionType.REMOVE:
      return state-action.paylaod;
    
    default:return state;      
  }
}

export default reducer;