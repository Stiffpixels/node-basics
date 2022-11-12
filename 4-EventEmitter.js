
const EventEmitter = require('events');

const cusEmitter = new EventEmitter();

cusEmitter.on("response", ()=>{
  console.log("A Madscientist");
});
cusEmitter.on("response", (name, profession)=>{
  console.log(`Okabe Rintarou!\nand here we have ${name} who is a ${profession}`);
});


cusEmitter.emit("response", "Walter White", "Chemistry Teacher");