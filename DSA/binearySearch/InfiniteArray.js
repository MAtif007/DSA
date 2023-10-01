let array = [3, 5, 7, 9, 10, 90,100, 130, 140, 160, 170];

let target = 10;

// https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/

function ans(arr, tar) {
    // debugger
    let start = 0;
    let end = 1;

    // condition for the target to lie in the range
    while (tar > arr[end]) {
        let temp = end + 1; // this is my new start
        end = end + (end - start + 1) * 2;
        start = temp;
    }
    // console.log(end, start)
    return binarySearch(arr, tar, start, end);

}

function binarySearch(arr, tar, start, end) {
    while (start <= end) {
       let mid = Math.floor((start + end)/2)

       if (tar < arr[mid]) {
           end = mid - 1;
        } else if (tar > arr[mid]) {
           start = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

console.log(ans(array, target));