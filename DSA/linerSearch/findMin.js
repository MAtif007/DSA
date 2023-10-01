let arr = [18, 12, -7, 3, 14, 28]


function findMin(arr) {
    if(arr.length === 0) return;

    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(arr[i] < min)
          min = arr[i]
    }
    return min;
}

console.log(findMin(arr))