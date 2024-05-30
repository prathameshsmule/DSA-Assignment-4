function transposeMatrix(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const result = [];

    for (let i = 0; i < m; i++) {
        result.push([]);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const transposedMatrix = transposeMatrix(matrix);
console.log(transposedMatrix);

// Output:
// [
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9]
// ]
