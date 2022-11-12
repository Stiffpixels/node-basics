const http = require('http');

const servar = http.createServer();
servar.on('request', (req,res)=>{
  console.log("req made");
  res.end("Welcome");
});

servar.listen(9999);