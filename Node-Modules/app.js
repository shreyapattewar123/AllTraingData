// const EventEmitter=require('events');
// const eventEmitter =new EventEmitter();
// eventEmitter.on('demoEvent',(data)=>{
//   console.log('demoEvent was triggered:',data);
// });

// eventEmitter.once('myEvent', () => {
//   console.log('myEvent occurred!');
// });

// // Trigger the event multiple times
// eventEmitter.emit('myEvent'); // Output: 'myEvent occurred!'
// eventEmitter.emit('myEvent'); // No output
// eventEmitter.emit('myEvent'); // No output
// //eventEmitter.emit('demoEvent',{name:'node js',version:'v20.16.0.0'});

// eventEmitter.on('greet',(name,age)=>{
//   console.log(`Hello,${name}! You are ${age} years old`);
// });
// eventEmitter.emit('greet','Alice',25);

const fs =require('fs')
// fs.readFile('file.txt','utf-8',(err,data)=>{
//   if (err) throw err;
//   console.log(data);
// });
const data=fs.readFileSync('file1.txt','utf8');
console.log(data);

fs.writeFile('file.txt','hello world!',(err)=>{
  if (err) throw err;
  console.log(data);
});

fs.appendFile('file.txt','Appended text',(err)=>{
  if (err) throw err;
  console.log('Content Appended!');
});

fs.appendFileSync('file.txt','appended text');
console.log('Content Appended');
