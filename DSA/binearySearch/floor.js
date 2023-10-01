let array = [2, 3, 5, 9, 14, 16, 18];

let target = 4;

function floor(arr, tar) {
    // debugger
    let start = 0;
    let end = arr.length - 1;

    if (tar > arr[arr.length - 1]) {
        return -1;
    }

    while(start <= end){

        let mid = start + (end -start)/2;

        if(arr[mid] === tar){
            return mid;
        }

        if (tar < arr[mid]) {
            end = mid - 1;
        } else if (tar > arr[mid]) {
            start = mid + 1;
        } else {
            // start = start + 1;
            mid;
        }

    }
    return end;
    
}


console.log(floor(array, target));