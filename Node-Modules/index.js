// // // const { error } = require('console');
// // // const http=require('http');

// // // // const server=http.createServer((req,res)=>{
// // // //   res.statusCode=200;
// // // //   // res.setHeader('Content-Type','text/plain');
// // // //   res.setHeader('Content-Type','text/html');
// // // //   res.end('<h1>Hello,world!<h1>')
// // // // });

// // // // server.listen(3000,()=>{
// // // //   console.log('Server running at http://localhost:3000/');
// // // // });

// // // http.get('http://jsonplaceholder.typicode.com/posts',(res)=>{
// // //   let data='';
// // //   res.on('data',chunk=>{
// // //     data+=chunk;
// // //   });
// // //   res.on('end',()=>{
// // //     console.log(JSON.parse(data));
// // //   });
// // //   res.on('error',(err)=>{
// // //     console.log('Error:'+err.message);
// // //   });

// // // });

// // // // server.listen(3000,()=>{
// // // //     console.log('Server running at http://localhost:3000/');
// // // //   });

// // const myUrl = new URL('http://jsonplahttp://jsonplaceholder.typicode.com/posts/pathname?userId=2&id=13');
// // console.log(myUrl.href)
// // console.log(myUrl.hostname)
// // console.log(myUrl.search)
// // console.log(myUrl.searchParams)

// const http = require('http');
// const https = require('https'); // We'll use https for secure requests

// const URL = 'https://jsonplaceholder.typicode.com/posts';

// // Create an HTTP server
// http.createServer((req, res) => {
//   if (req.url === '/') {
//     // Fetch data from the JSONPlaceholder API
//     https.get(URL, (apiRes) => {
//       let data = '';

//       // Collect data chunks
//       apiRes.on('data', chunk => {
//         data += chunk;
//       });

//       // When all data is received
//       apiRes.on('end', () => {
//         // Parse the JSON data
//         const posts = JSON.parse(data);

//         // Create a simple HTML page to display the data
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html><head><title>Posts</title></head><body>');
//         res.write('<h1>Posts</h1>');

//         // Iterate over the posts and create list items
//         posts.forEach(post => {
//           res.write(`<h2>${post.title}</h2>`);
//           res.write(`<p>${post.body}</p>`);
//         });

//         res.write('</body></html>');
//         res.end();
//       });

//       // Handle errors
//       apiRes.on('error', (err) => {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end('Error: ' + err.message);
//       });
//     });
//   } else {
//     // Handle 404 for other routes
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found');
//   }
// }).listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });



