console.log("before setInterval");
setInterval(()=>{
  console.log("ah, crap here we go again.");
}, 3000);

console.log("lucky statement gets to execute before setInterval");