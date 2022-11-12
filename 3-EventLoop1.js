
//event loop offloads the async setTimeout and continues normal execution of statements 
//after statements are done executing below it and once ready the callback function is called

console.log("First task");
setTimeout(()=>{
  console.log("second task");
}, 0);

console.log("next task");