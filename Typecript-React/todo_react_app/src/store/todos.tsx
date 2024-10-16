import { createContext, ReactNode } from "react";

export type Todosprovideer={
   children :ReactNode
}

export type TodosContext={
 todos:[]
}

export const todosContext=createContext(null)

export const Todosprovideer=({children}:Todosprovideer)=>{
  return <todosContext.Provider value={}>
    {children}
  </todosContext.Provider>


}