// Write your function here
function getAllElementsButNth(obj, key){
    return obj.splice(1,key);
}


var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']