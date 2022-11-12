const {writeFileSync} = require('fs');

for(let i= 1; i<1000;++i){
  writeFileSync("./Anime/One piece/bigFile.txt", `This is line ${i}`, {flag: 'a'});
}