// let array = [1,2,3,4,5,5,6];
let array = [4,5,6,7,0,1,2];


function countRotation(nums) {
    let pivot = findPivot(nums);

    // if you did not find a pivot, it means the array is not rotated
    if (pivot == -1) {
        // just do normal binary search
        return 0;
    }
    return pivot + 1;
}


console.log(countRotation(array))


function findPivot(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        // 4 cases over here
        if (mid < end && arr[mid] > arr[mid + 1]) {
            return mid;
        }
        if (mid > start && arr[mid] < arr[mid - 1]) {
            return mid-1;
        }
        if (arr[mid] <= arr[start]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}


function findPivotWithDuplicates(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        // 4 cases over here
        if (mid < end && arr[mid] > arr[mid + 1]) {
            return mid;
        }
        if (mid > start && arr[mid] < arr[mid - 1]) {
            return mid-1;
        }

        // if elements at middle, start, end are equal then just skip the duplicates
        if (arr[mid] == arr[start] && arr[mid] == arr[end]) {
            // skip the duplicates
            // NOTE: what if these elements at start and end were the pivot??
            // check if start is pivot
            if (start < end && arr[start] > arr[start + 1]) {
                return start;
            }
            start++;

            // check whether end is pivot
            if (end > start && arr[end] < arr[end - 1]) {
                return end - 1;
            }
            end--;
        }
        // left side is sorted, so pivot should be in right
        else if(arr[start] < arr[mid] || (arr[start] == arr[mid] && arr[mid] > arr[end])) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

// console.log(findPivotWithDuplicates(array));