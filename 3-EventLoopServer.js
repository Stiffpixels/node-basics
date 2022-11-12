const http = require('http');

const server = http.createServer((req,res)=>{
  console.log("request recieved ");
  res.end("<h1>waga teki oo kureeee!</h1>");
});

server.listen(9999, ()=>{
  console.log("Server is listening on port: 9999");
});