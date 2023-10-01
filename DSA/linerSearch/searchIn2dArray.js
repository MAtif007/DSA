let array = [
    [23, 4, 1],
    [18, 12, 3, 9],
    [78, 99, 34, 56],
    [18, 12]
];

let target = 56;


function searchIn2D(arr, tar) {
    
    for (let r = 0; r < arr.length; r++) {
        // console.log(arr[c])
        for (let c = 0; c <= arr[r].length; c++) {
           if(arr[r][c] == tar)
        //    console.log(arr[r][c])
           return [r, c];
        }
    }
    return [-1, -1];
}

console.log(searchIn2D(array))

function max(arr) {
    let max = Number.MIN_VALUE;
    
    for (let r = 0; r < arr.length; r++) {
        // console.log(arr[c])
        for (let c = 0; c <= arr[r].length; c++) {
           if(arr[r][c] > max)
            max = arr[r][c];
        }
    }
    return max;
}

console.log(max(array))