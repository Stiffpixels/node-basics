const {readFile, writeFile} = require('fs');
readFile("./Anime/One piece/script.txt", 'utf8', (err, result)=>{
  if(err){
    console.log(err);
    return;
  }
  const first = result;
  readFile("./Anime/One piece/char.txt", 'utf8', (err, result)=>{
    if(err){
      console.log(err);
      return;
    }
    const second= result;
    
    writeFile("./Anime/One piece/scripCharA.txt", `Here are is another file with script and char using async file opr\n ${first}, ${second}`, (err)=>{
      if(err){
        console.log(err);
        return;
      }
    });
    });
});