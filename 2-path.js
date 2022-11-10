const pth = require('path');

console.log(pth.sep); //path seperator of current os 

//relative path 

const relPath = pth.join("/Anime", "One piece", "script.txt");

console.log(relPath);

//terminal file or base file that a path leads to
const baseFile = pth.basename(relPath);
console.log(baseFile);

const absPath = pth.resolve(__dirname, "Anime", "One piece", "script.txt");

//absolute path
console.log(absPath);