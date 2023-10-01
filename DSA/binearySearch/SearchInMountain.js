// https://leetcode.com/problems/find-in-mountain-array/
// let array = [1,2,3,4,5,3,1];
let array =[0,1,2,4,2,1];
let target = 3;

function search(arr, tar) {
    let peak = peakIndexInMountainArray(arr);
    let firstTry = orderAgnosticBS(arr, tar, 0, peak);
    if (firstTry != -1) {
        return firstTry;
    }
        // try to search in second half
    return orderAgnosticBS(arr, target, peak + 1, arr.length - 1);
}

function orderAgnosticBS(arr, tar, start, end) {
    // debugger;
    // let start = 0;
    // let end = arr.length - 1;
    let isAsc = arr[start] < arr[end];
    while (start <= end) {

       let mid = Math.floor((start + end)/2);

       if (arr[mid] == tar) {
        return mid;
       }

       if (isAsc) {
            if (tar < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
       } else {
            if (tar > arr[mid]) {
               end = mid - 1;
            } else{
               start = mid + 1;
            }   
        }
    }
       return -1;
    
}

var peakIndexInMountainArray = function(arr) {
    // debugger;
    let start = 0;
    let end = arr.length-1
    let mid = Math.floor(start + (end-start)/2)
    while(start < end){
        if(arr[mid] < arr[mid+1]){
           start = mid+1
        } else {
           end = mid
        }
        mid = Math.floor(start + (end-start)/2)
    }
    return start;
};

console.log(search(array, target));