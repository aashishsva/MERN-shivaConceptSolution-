let arr= [5,3,8,9,3,12,4,5,18,22];

// if we use lambda function it will return the array in accending order or if we change the order it will return the array in descending order .
arr.sort(function(a, b){
    return b-a
});
console.log(arr);


//Strings are sorted in Alphabetical order
let arr2 = ["IronMan", "Batman", "Superman", "Captain America"];
arr2.sort();
console.log(arr2);