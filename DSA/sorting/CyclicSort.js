

let arr = [5, 4, 3, 2, 1];

    function CyclicSort (arr) {
        let  i = 0;
        while (i < arr.length) {
            let  correct = arr[i] - 1;
            if (arr[i] != arr[correct]) {
                swap(arr, i , correct);
            } else {
                i++;
            }
        }
        return arr;
    }

    function swap(arr, first, second) {
        let temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }

console.log(CyclicSort(arr))