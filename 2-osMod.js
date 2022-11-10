const os = require('os');

//os user info 
console.log(`User: ${os.userInfo()}`);

//system up time 
console.log(`System uptime: ${os.uptime()} seconds`);

//storing data in Object

const osdet = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
};

console.log(osdet);