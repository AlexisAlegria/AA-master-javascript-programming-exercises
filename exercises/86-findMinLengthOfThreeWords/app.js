function findMinLengthOfThreeWords(str1, str2, str3){
    if(str1.length - str2.length < 0) return str1.length;
    else if(str2.length - str3.length < 0) return str2.length;
    else return str3.length;
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1