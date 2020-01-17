var dt = require('./myFirstModule');
console.log( dt.myDateTime( ) );
var vm = require('vm');
var myobj = { name : 'John' , age : 38 };
vm.createContext( myobj );
console.log( myobj );
if( myobj ){
vm.runInContext('age += 1' , myobj );
console.log( myobj );
}