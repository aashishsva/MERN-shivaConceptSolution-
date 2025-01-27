//Map object holds key-value pair and remember the original insertion order of the keys;
const myNum = [1,2,3,4,5,6,7,8,9];
const newValue = myNum.map((num)=>{
    
    return num*5;
})

console.log(newValue);