
import { ActionType } from "../actions-type"

interface Add{
  type:ActionType.ADD,
  paylaod:number
}

interface Remove{
  type:ActionType.REMOVE,
  paylaod:number
}
export type Action=Add|Remove;