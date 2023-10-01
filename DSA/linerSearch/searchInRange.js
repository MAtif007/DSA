let arr = [18, 12, -7, 3, 14, 28];
let startIndex = 1;
let endIndex = 4;
let target = -7;

function linearSearch(arr, start, end, tar) {

        if (arr.length == 0) {
            return -1;
        }

        for (let index = start; index <= end; index++) {
            let element = arr[index];
            if (element == tar) {
                return index;
            }
        }
        return -1;
}

console.log(linearSearch(arr, startIndex, endIndex, target));