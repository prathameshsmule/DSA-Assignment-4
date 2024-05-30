function rotateMatrix(matrix) {
    const n = matrix.length;
    const result = [];

    for (let i = 0; i < n; i++) {
        result.push([]);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[j][n - 1 - i] = matrix[i][j];
        }
    }

    return result;
}
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rotatedMatrix = rotateMatrix(matrix);
console.log(rotatedMatrix);

// Output:
// [
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3]
// ]
