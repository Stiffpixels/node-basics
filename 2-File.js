const {readFileSync, writeFileSync} = require('fs');

const script = readFileSync("./Anime/One piece/script.txt");
const chars = readFileSync("./Anime/One piece/char.txt");

//console.log(script);
//console.log(chars);

writeFileSync("./Anime/One piece/scriptChar.txt", `Script of one piece then characters ${script}, ${chars}`);
writeFileSync("./Anime/One piece/scriptChar.txt", "Oops forgot some characters- Simon\nMihawk\nShanks\nKaido", { flag:"a" });