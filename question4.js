function findCommonElements(matrix) {
    const rowCount = matrix.length;
    const colCount = matrix[0].length;
    const elementCount = {};

    for (let j = 0; j < colCount; j++) {
        elementCount[matrix[0][j]] = 1;
    }

    for (let i = 1; i < rowCount; i++) {
        for (let j = 0; j < colCount; j++) {
            if (elementCount[matrix[i][j]] === i) {
                elementCount[matrix[i][j]] = i + 1;
            }
        }
    }

    // Collect elements that are present in all rows
    const commonElements = [];
    for (const key in elementCount) {
        if (elementCount[key] === rowCount) {
            commonElements.push(parseInt(key));
        }
    }

    return commonElements;
}

// Example usage:
const matrix = [
    [1, 2, 1, 4, 8],
    [3, 7, 8, 5, 1],
    [8, 7, 7, 3, 1],
    [8, 1, 2, 7, 9]
];

const result = findCommonElements(matrix);
console.log(result); 
// Output: [1, 8]
