var http = require('http');

http.createServer(function(req, res){
    res.write('200');
    res.end('Hello From Nimi');    
}).listen(8080);

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        showResult(xhttp.responseXML);
    }
};
xhttp.open("GET", "offer_with_default_algoparams.xml", true);
xhttp.send(); 

function showResult(xml) {
    if(xml){
    cosole.loge(xml);    
    }else{
    console.log("Didn't read the file");    
    }
}