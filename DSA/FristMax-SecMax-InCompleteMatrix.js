let arr = [[4,7,9,2],[5,9,11,6]];
let max = 0;
let smax = 0;

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] > max){
            smax = max;
            max = arr[i][j];
        }else if(arr[i][j] > smax && arr[i][j] <max){
            smax = arr[i][j];
        }
    }
}
console.log(`First Max : ${max} , Second Max : ${smax}`);
