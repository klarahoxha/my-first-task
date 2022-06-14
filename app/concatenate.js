const arr1 = require('./convert.js')
const arr2 = require('./array.js')

console.log("Before concatenation: ")
console.log(arr1)
console.log(arr2)
console.log("\nAfter concatenation: ")
const arr = arr1.concat(arr2);

module.exports=arr;