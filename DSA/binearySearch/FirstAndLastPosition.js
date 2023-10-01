
let nums = [5,7,7,7,7,8,8,10];
let target = 7;

function findStartIndex (nums, tar) {
    // debugger
    let start = 0;
    let end = nums.length - 1;
    while(start <= end) {
        let mid = Math.floor((start + end)/2);;

        if (nums[mid] >= tar) {
            end = mid - 1;
        } else {
            start = mid + 1;
        } 
    }
    return start;
}

function findLastIndex(nums, tar) {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end) {
        let mid = Math.floor((start + end)/2);;

        if (nums[mid] <= tar) {
            start = mid + 1;
        } else {
            end = mid - 1;
        } 
    }

    return end;
} 

console.log('first',findStartIndex(nums, target));
console.log('last',findLastIndex(nums, target));

var searchRange = function(nums, target) {
    let low = 0, high = nums.length-1, mid;
    
    // find the start
    while(low <= high) {
        mid = Math.floor((low+high)/2);
        if(nums[mid] >= target) high = mid-1;
        else low = mid+1;
    }
    
    // if target doesn't exist
    if(nums[low] !== target) return [-1, -1];
    
    const start = low;
    
    // reset low and high
    low = 0, high = nums.length-1;
    
    // find the end
    while(low <= high) {
        mid = Math.floor((low+high)/2);
        if(nums[mid] <= target) low = mid+1;
        else high = mid-1;
    }
    return [start, high];
};

console.log(searchRange(nums, target));
