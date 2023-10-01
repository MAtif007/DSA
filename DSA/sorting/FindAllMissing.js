// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// Asked in Google

let arr = [4,3,2,7,8,2,3,1];
    function findDisappearedNumbers(nums) {
        let  i = 0;
        while (i < nums.length) {
            let correct = nums[i] - 1;
            if (nums[i] != nums[correct]) {
                swap(nums, i , correct);
            } else {
                i++;
            }
        }

        // just find missing numbers
        let ans = [];
        for (let index = 0; index < nums.length; index++) {
            if (nums[index] != index+1) {
                ans.push(index + 1);
            }
        }

        return ans;
    }

    function swap(arr, first, second) {
        let temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }

    console.log(findDisappearedNumbers(arr))