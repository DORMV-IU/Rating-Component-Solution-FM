var origArray = [0, 1, 2, 3, 4, 5];
var cloneArray = origArray.slice();
var i = 3;

cloneArray.splice(2, 1);

console.log(cloneArray);
console.log(origArray);
