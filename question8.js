function printBoundaryElements(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    let result = [];

    for (let j = 0; j < m; j++) {
        result.push(matrix[0][j]);
    }

    for (let i = 1; i < n - 1; i++) {
        result.push(matrix[i][m - 1]);
    }

    if (n > 1) {
        for (let j = m - 1; j >= 0; j--) {
            result.push(matrix[n - 1][j]);
        }
    }

    if (m > 1) {
        for (let i = n - 2; i > 0; i--) {
            result.push(matrix[i][0]);
        }
    }

    return result.join(' ');
}

const matrix = [
    [1, 2, 3],
    [5, 6, 7],
    [1, 2, 3]
];

const result = printBoundaryElements(matrix);
console.log(result); 
// Output: "1 2 3 7 3 2 1 5"
