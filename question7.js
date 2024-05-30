function isSubset(arr1, arr2) {
    
    const set = new Set(arr1);

    for (let element of arr2) {
        if (!set.has(element)) {
            return false;
        }
    }

    return true;
}

const arr1 = [11, 1, 13, 21, 3, 7];
const arr2 = [11, 3, 7, 1];

const result = isSubset(arr1, arr2);
console.log(result ? "arr2 is a subset of arr1" : "arr2 is not a subset of arr1");

// Output: arr2 is a subset of arr1
