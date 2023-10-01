let array = ['c', 'f', 'j'];
let target = 'c';

function nextGreatestLetter(letters, target) {

    let start = 0;
    let end = letters.length - 1;
    if (start == letters.length) {
        return arr[0];
     };
    while(start <= end) {
        let mid = start + (end - start) / 2;

        if (target <= letters[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return letters[start % letters.length];
    // return letters[start]; // for largest charter of the input
}

console.log(nextGreatestLetter(array, target))

