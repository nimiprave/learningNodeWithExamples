// working with JSON upload. 

var jsonObj = require("./modelData1.json");
//console.log(jsonObj)
//console.log(jsonObj.Steps);
// logic to read the steps, algo, task parameters, datasource parameters. 

var steps = jsonObj.Steps ;
console.log(steps);
console.log(typeof steps);
console.log(steps.results.length);

