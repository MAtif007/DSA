// https://leetcode.com/problems/missing-number/
// Amazon Question
let arr = [4, 0, 3, 1];

   function missingNumber(arr) {
        let  i = 0;
        while (i < arr.length) {
            let correct = arr[i];
            if (arr[i] < arr.length && arr[i] != arr[correct]) {
                swap(arr, i , correct);
            } else {
                i++;
            }
        }

        // search for first missing number
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] != index) {
                return index;
            }
        }

        // case 2
        return arr.length;
    }

    function swap(arr, first, second) {
        let temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }

console.log(missingNumber(arr))