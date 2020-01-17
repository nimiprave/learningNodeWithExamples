var http = require('http');
var count = 0;
http.createServer(function(req, res){
    if(req.url.includes('reset')){
        count = 0;
    }else{
      console.log(count++);
    res.write('200');
    res.end('Hello From Nimi');    
    }
    
}).listen(8080);