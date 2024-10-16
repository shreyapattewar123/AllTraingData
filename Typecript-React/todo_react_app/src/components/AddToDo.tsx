import React, { useState } from 'react'

const AddToDo = () => {
  const[todo,setTodo]=useState("");
  const handleFromSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    handleAddToDo(todo)
    setTodo("")
  }
  return (
   <form onSubmit={handleFromSubmit}>
    <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
    <button type='submit'>Add</button>
   </form>
   
  )
}

export default AddToDo
