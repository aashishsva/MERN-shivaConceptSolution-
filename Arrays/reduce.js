const numbers = [1, 2, 3, 4, 5];

//Syntax of Reduce 
// array.reduce(callback(accumulator, currentValue, index, array), initialValue)



const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); 