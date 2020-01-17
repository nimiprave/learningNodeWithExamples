var str = "visit=====____ school";
var n = str.search(/[=_]/g);
console.log('length of string: ');
console.log(str.length);
console.log(n);
var j = str.match(/[=_]/g);
console.log(j);
if ( str.length === j.length ){
    console.log('Full length string');
}else{
    console.log('Partially contains');
}