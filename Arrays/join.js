let arr1 = [5,2,0,1];
let arr2 = [3,5,8,6];

let newArr = [...arr1,...arr2];
console.log(typeof(newArr));
console.log(newArr)
// merge the two arrays using sprade operator and join .

let joinedArray = [...arr1,...arr2].join(',');
console.log(typeof(joinedArray))
console.log(joinedArray);
