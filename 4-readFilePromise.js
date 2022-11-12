const { readFile, writeFile } = require('fs').promises;
//const util = require('util');


//const getRPromise = util.promisify(readFile);
//const getWPromise = util.promisify(writeFile);

/*const getText = (path)=>{
  return new Promise((resolve, reject)=>{
    readFile(path,'utf8', (err, result)=>{
      if(err){
        reject(err);
      }else{
        resolve(result);
      }
    });
  });
};*/

let getTextA = async ()=>{
  const res = await readFile("./Anime/One piece/script.txt", 'utf8');
  
  const res1 = await readFile("./Anime/One piece/char.txt", 'utf8');
  await writeFile("./Anime/One piece/scriptChar.txt", "\nI did'nt know you could just use readFile and writeFile as promises using .promises on module", {flag: 'a'});
};


getTextA();

/*getText("./Anime/One piece/script.txt")
.then(res=>console.log(res))
.catch(err=>console.log(err));*/