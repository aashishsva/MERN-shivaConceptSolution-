let matrix = [
    [4, 7, 9, 2],
    [5, 9, 11, 6],
    [3, 8, 1, 4]
];

for (let i = 0; i < matrix.length; i++) {
    let start = 0;
    let end = matrix[i].length - 1;
    while (start < end) {
        let temp = matrix[i][start];
        matrix[i][start] = matrix[i][end];
        matrix[i][end] = temp;
        
        start++;
        end--;
    }
}


for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
}
