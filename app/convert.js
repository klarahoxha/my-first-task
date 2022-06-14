const fs = require('fs');
const jsonarr = JSON.parse(fs.readFileSync('./app/array.json', 'utf8'));
module.exports=jsonarr;