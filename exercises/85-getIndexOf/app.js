// Write your function here
function getIndexOf(substring, string){
    for (let i = 0; i < string.length; i++) {
        const sliced = string.slice(i, i + substring.length);
        if (sliced === substring) {
          return i;
        }
      }
      return false;
    }

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2