const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url=="/"){
    res.end("Hi ;) Welcome to our homepage");
  }
  else if(req.url=="/about"){
    res.end("Hi ;) Welcome to our about page");
  }
  else
  res.end(`<h1>Oops!</h1><p>Some problem occured we cannot find the page you are looking for :(`);
});

server.listen(9999);