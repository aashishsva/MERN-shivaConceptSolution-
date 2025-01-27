let a = [[3,9],[2,6]];
let b = [[1,6],[2,7]];
let result = [[0,0],[0,0]]

for(let i = 0; i<2; i++){
    for(let j = 0; j<2; j++){
        let mult = 0;
        for(let k = 0; k<2; k++){
            mult += a[i][k] * b[k][j];
        }
        result[i][j] = mult;
        console.log(result[i][j]);
    }
}