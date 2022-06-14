const arr = require('./concatenate.js')

function sum(arr){
    return arr.reduce(function(a,b){
        return a + b
    },0)
}

let summ = sum(arr)

module.exports=summ;