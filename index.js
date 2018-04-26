// Create a node program x
// Check for the first process argument to be init x
// If the first argument is init continue processing <---------
// Use readline to ask for 5 inputs
// Create a string that is a json object
// The key values should be the inputs you get from the user
// Save this json to a file called package.json

console.log(process.argv)
process.argv.forEach((process,i,arr)=>{
  console.log(`${i}: ${process}`)
})