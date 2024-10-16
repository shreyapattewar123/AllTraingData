import { ActionType } from "../action-types";

interface DepositeAction{
  type:ActionType.DEPOSITE,
  paylaod:number
}

interface WithdrawAction{
  type:ActionType.WITHDRAW,
  paylaod:number
}

interface BankruptAction{
  type:ActionType.BANKRUPT,
  paylaod:number
}
export type Action=DepositeAction|WithdrawAction|BankruptAction;