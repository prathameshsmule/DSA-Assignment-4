function findSaddlePoint(matrix) {
    const rowCount = matrix.length;
    const colCount = matrix[0].length;

    for (let i = 0; i < rowCount; i++) {

        let rowMin = matrix[i][0];
        let colIndex = 0;
        for (let j = 1; j < colCount; j++) {
            if (matrix[i][j] < rowMin) {
                rowMin = matrix[i][j];
                colIndex = j;
            }
        }

        let isSaddlePoint = true;
        for (let k = 0; k < rowCount; k++) {
            if (matrix[k][colIndex] > rowMin) {
                isSaddlePoint = false;
                break;
            }
        }

        if (isSaddlePoint) {
            return {row: i, column: colIndex, value: rowMin};
        }
    }

    return "No saddle point";
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const result = findSaddlePoint(matrix);
console.log(result); // Output: No saddle point
