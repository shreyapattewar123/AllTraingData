//Implemeting Interface
interface employee{
  empcode:number;
  name:string;
  getSalary:(number)=>number;
}

class manus implements employee{
  empcode: number;
  name: string;
  constructor(code:number,name:string){
this.empcode=code;
this.name=name;
  }
  
  getSalary(empcode:number):number{
    return 20000;
  }
}
let emp=new manus(1,"shreya");
console.log(emp);
