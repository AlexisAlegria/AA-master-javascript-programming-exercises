// Write your function here
function addToFrontOfNew(input, key){
    let array = [key];
    return array.concat(input);
}
var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); //--> [1, 2]

