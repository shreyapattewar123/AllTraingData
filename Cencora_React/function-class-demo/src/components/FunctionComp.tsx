import { useState } from "react";

interface IProps{
  stname:string;
  age:number;
}
interface Istate{
  bookname:string;
  author:string;
}

const FunctionComp:React.FC<IProps>=({stname,age})=>{
  const [state]=useState<Istate>({bookname:"compalete referance",author:"shield"})
  return (
<>
<h1>
  THis is function components;
</h1>
<div>
  <h2>functional components props are</h2>
  <h3>
    Student name is:<strong>{stname}</strong>
    Student age is:<strong>{age}</strong>
  </h3>
</div>
<div>

  <h1> values which  are accessed</h1>
  <h3> Bookname is :{state.bookname}</h3>
  <h3> author is :{state.author}</h3>
</div>
</>

  );
}
export default FunctionComp