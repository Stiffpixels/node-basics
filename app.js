const {createReadStream} = require('fs');

const rstream = createReadStream("./Anime/One piece/bigFile.txt", { 
  hughWaterMark: 100000,
  encoding: 'utf8' 
});

rstream.on("data", (result)=>{
  console.log(result);
});

rstream.on("error", (err)=>{
  console.log(err);
});