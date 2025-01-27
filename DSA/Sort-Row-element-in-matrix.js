let matrix = [[4, 7, 9, 2], [5, 9, 11, 6], [3, 8, 1, 4]];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        for (let k = 0; k < matrix[i].length - 1 - j; k++) {
            if (matrix[i][k] > matrix[i][k + 1]) {

                let temp = matrix[i][k];
                matrix[i][k] = matrix[i][k + 1];
                matrix[i][k + 1] = temp;
                
            }
        }
    }
}


for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        process.stdout.write(matrix[i][j] + " ");
    }
    process.stdout.write("\n");
}
