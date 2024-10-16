//Read Only Properties
interface Cities{
  name:string;
  readonly SSN:number;
}

let personObj:Cities={SSN:1010110,name:'name'}
personObj.name='shreya';
//personObj.SSN='546464';

