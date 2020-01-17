var fs = require('fs');
var rs = fs.createReadStream('./playful.js');
rs.open('open', function(){
   console.log('The file is open'); 
});