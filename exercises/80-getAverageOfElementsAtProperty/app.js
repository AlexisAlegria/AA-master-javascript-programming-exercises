// Write your function here
function getAverageOfElementsAtProperty(obj,key){
    return obj.key.reduce((a,b) => a + b, 0) / key.length;
}

var obj = {
    key: [1, 2, 3]
  };
  var output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); // --> 2
