// https://leetcode.com/problems/peak-index-in-a-mountain-array/
    // https://leetcode.com/problems/find-peak-element/
// let array = [0,1,0];
// let array = [0,2,1,0];
let array = [0,10,5,2];


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

console.log(peakIndexInMountainArray(array));