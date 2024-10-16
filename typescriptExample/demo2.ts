var employee: [number, string] = [1, "Steve"];
var
person: [number, string, boolean] = [1, "Steve", true];
var use:[number,string,boolean, number,string]=[1,"Steve", true, 20,"Admin"];// initialize tuple variable
console.log(use)
var stId : number =23;
var stName : string = "Hari";
console.log(stId);
console.log(stName);
 
 
//declaration with assignment
var Student: [number,string]=
[12,"Hari"];
 
console.log(Student);
//declaration with assignment
 
var student : [number,string]=
[3,"Krishna"];
console.log(student);
//multi datatype tuple
var bookingType : [boolean,number,string,any];
bookingType = [true,44,"Confirmed",56.4];
console.log(bookingType);
var emp:[number,string][];
emp=[[1,"shreya"],[2,"gaurav"]]
console.log(emp);
emp.push([3,"gauri"]);
console.log(emp);

//Tuple Array
 
var products : [number,string][];
products=[[101,'TV'],[203,'Refridgerator'],[80,'Washing Machine']]
console.log(products);
products.push([108,'Computer']);
products.push([111,'Mike']);
console.log(products);

var products1 : [number,string][];
products1=[[101,'TV'],[203,'Refridgerator'],[80,'Washing Machine']]
console.log(products);
// products.push([108,'Computer']);
// products.push([111,'Mike']);
// console.log(products);
// products.push(products1);
// products1.push(products);
enum printMedia{
  newpaper,
  magazine,
  newletter,
  book
}
function getMedia(medianame:string) :printMedia|undefined{
  if(medianame==="fabo"|| medianame==="outlook"){
    return printMedia.magazine
  }

}
console.log(getMedia('fabo'));

enum printMedia2{
  newpaper=1,
  Newsletter=getMedia('newsletter')as number,
  magazine=Newsletter*3,
  book=10
}
function getPrintMedia(medianame:string) :number|undefined{
  if(medianame=="Newsletter"){
    return 9;
  }

}
console.log(printMedia2.Newsletter);
