import { Component } from "react";

interface Istate{
  bookname:string;
  author:string;
}
interface Iprops{
  empName:string;
  age:number;
}

export default class ClassComp extends Component<Iprops,Istate>{
  constructor(props:Iprops){
    super(props);
    this.state={
       bookname:"react.js",
       author:"Orielly"
    }
  }
  render(){
    const{empName,age}=this.props;
    const{bookname,author}=this.state;
    return(
      <>
      <h1 className="bg-dark p-1 text-white text center"> 
        THis is the class components </h1>
        <div>
          <h2>
            class components props values
          </h2>
          <h3> Emp name :<strong>{empName}</strong></h3>
          <h3> Emp name :<strong>{age}</strong></h3>
        </div>
        <div>
        <h1> values which  are accessed</h1>
  <h3> Bookname is :{bookname}</h3>
  <h3> author is :{author}</h3>
        </div>
      </>
    )
  }

}



