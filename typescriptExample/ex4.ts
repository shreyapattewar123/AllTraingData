//interface as function type
interface keyValueProcessor{
  (key:number,value:string):void;

}
function getvalues(key:number,value:string):void{
  console.log("Key is :"+key+" "+"values is: "+value);
}
getvalues(101,"shreya");
let kvp:keyValueProcessor=getvalues;
kvp(1,"paper");

