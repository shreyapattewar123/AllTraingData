//function overloading
function add(a: string,b:string): string;

//function overloading
function add(x: number,y:number): number;



function add(c: any,d:any): any{
  return c+d;
  }
  console.log(add("hello","world"));
  console.log(add(2.3,4));
  console.log(add(33.3,8));
  
  
