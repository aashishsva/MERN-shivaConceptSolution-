let matrix = [ [4, 7, 9, 2], [5, 9, 11, 6], [3, 8, 1, 4] ];

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

console.log("Prime numbers in the matrix:");

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        let num = matrix[i][j];
        
        // Check if the number is prime
        let isPrimeFlag = isPrime(num);
        
        if (isPrimeFlag === true) {
            console.log(num);
        }
    }
}
