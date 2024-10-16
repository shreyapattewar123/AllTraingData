function greet(greeting:string,...names:string[]){
return greeting+" "+names.join(",")+"!";
}
console.log(greet("hello","shreya","tanaya"));

console.log(greet("hello"));

function sum( ...v: number[]): number{
  let sum:number=0;
  v.forEach(element=>{
    sum=sum+element;
  }

  );
  return sum;


  // const total = numbers.reduce((accumulator, current) => accumulator + current, 0);
  
  // return `${greeting} ${total}`;
}

// Call the function with a greeting and several numbers
console.log(sum(2, 3, 5, 10));