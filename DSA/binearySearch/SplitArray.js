
// let nums = [7,2,5,10,8];
let nums = [1,2,3,4,5];
let  k = 2;

function splitArray(nums, m) {
    let start = 0;
    let end = 0;

    for (let i = 0; i < nums.length; i++) {
        start = Math.max(start, nums[i]); // in the end of the loop this will contain the max item of the array
        end += nums[i];
    }

    // binary search
    while (start < end) {
        // try for the middle as potential ans
        let mid = Math.floor((start + end)/2);

        // calculate how many pieces you can divide this in with this max sum
        let sum = 0;
        let pieces = 1;
        for(let i = 0; i < nums.length; i++) {
            if (sum + nums[i] > mid) {
                // you cannot add this in this subarray, make new one
                // say you add this num in new subarray, then sum = num
                sum = nums[i];
                pieces++;
            } else {
                sum += nums[i];
            }
        }

        if (pieces > m) {
            start = mid + 1;
        } else {
            end = mid;
        }

    }
    return end; // here start == end
}

console.log(splitArray(nums, k));