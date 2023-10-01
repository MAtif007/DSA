
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

 // search in the row provided between the cols provided
 function binarySearch(matrix, row, cStart, cEnd, target) {
    while (cStart <= cEnd) {
        let mid = Math.floor((cStart + cEnd)/2);
        // console.log(mid)
        if (matrix[row][mid] == target) {
            return [row, mid];
        }
        if (matrix[row][mid] < target) {
            cStart = mid + 1;
        } else {
            cEnd = mid - 1;
        }
    }
    return [-1, -1];
}

function search(matrix, target) {
    // debugger
    let rows = matrix.length;
    let cols = matrix[0].length; // be cautious, matrix may be empty
    if (cols == 0){
        return [-1,-1];
    }
    if (rows == 1) {
        return binarySearch(matrix,0, 0, cols-1, target);
    }

    let rStart = 0;
    let rEnd = rows - 1;
    let cMid = Math.floor(cols / 2);

    // run the loop till 2 rows are remaining
    while (rStart < (rEnd - 1)) { // while this is true it will have more than 2 rows
        // let mid = rStart + (rEnd - rStart) / 2;
        let mid = Math.floor((rStart + rEnd)/2);
        // console.log(mid)
        if (matrix[mid][cMid] == target) {
            return [mid, cMid];
        }
        if (matrix[mid][cMid] < target) {
            rStart = mid;
        } else {
            rEnd = mid;
        }
    }

    // now we have two rows
    // check whether the target is in the col of 2 rows
    if (matrix[rStart][cMid] == target) {
        return [rStart, cMid];
    }
    if (matrix[rStart + 1][cMid] == target) {
        return [rStart + 1, cMid];
    }

    // search in 1st half
    if (target <= matrix[rStart][cMid - 1]) {
        return binarySearch(matrix, rStart, 0, cMid-1, target);
    }
    // search in 2nd half
    if (target >= matrix[rStart][cMid + 1] && target <= matrix[rStart][cols - 1]) {
        return binarySearch(matrix, rStart, cMid + 1, cols - 1, target);
    }
    // search in 3rd half
    if (target <= matrix[rStart + 1][cMid - 1]) {
        return binarySearch(matrix, rStart + 1, 0, cMid-1, target);
    } else {
        return binarySearch(matrix, rStart + 1, cMid + 1, cols - 1, target);
    }
}


console.log(search(arr, 8))