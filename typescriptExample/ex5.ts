//interface for array type

interface NumList{
  [index:number]:number;
}

let numArr:NumList=[1,2,3];
numArr[0];

interface ISStringList{
  [index:string]:string;
}
let strArr:ISStringList={};
strArr["TS"]="TypeScript";
strArr["js"]="shreya";
console.log(strArr["TS"]);