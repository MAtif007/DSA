
let arr = [ 
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [28, 29, 37, 49],
    [33, 34, 38, 50]
];

function search(matrix, target) {
    // debugger
    let r = 0;
    let c = matrix[0].length - 1;

    while (r < matrix.length && c >= 0) {
        if (matrix[r][c] == target) {
            return [r, c];
        }
        if (matrix[r][c] < target) {
            r++;
        } else {
            c--;
        }
    }
    return [-1, -1];
}

console.log(search(arr, 49));