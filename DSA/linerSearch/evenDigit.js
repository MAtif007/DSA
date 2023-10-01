let nums = [12,345,2,6,7896];


const findNumbers = function(nums) {
      let count = 0;
      let arr = []
    nums.map(num => {
        if(even(num)){
          arr.push(num)
          count++;
          }
        });
        console.log(arr)
        return count;
    };
    
    //Checking whether the num is even or not
    function even(num) {
         const numOfDigits = digits(num);
        if(Math.floor(numOfDigits % 2) == 0){
            return true;
        }

    return false;

    }
    
    //Checking the number of digits.
    function digits(num){
        if(num == 0){
            return 1;
        }
        let count = 0;
        while(num > 0){
            count++;
            num = Math.floor(num/10);
        }
        return count;
    }

console.log(findNumbers(nums));


// findNumbers = function(nums) {
//     let count=0
//     for(let j = 0; j < nums.length; j++){
//     let numToArray = Array.from(String(nums[j]), Number);
//     if(numToArray.length % 2 === 0){
//          count++
//          console.log(nums[j])
//       }
    
//     }
//     return count
// };
// console.log('findNumbers', findNumbers(nums))

const findNumbers2 = function(nums) {
    let count = 0;
    let newArr = [];
	nums.forEach(num => {
     if(even(num)){
        newArr.push(num)
        count++;
       }
    });
    console.log(newArr)
    return count;
};


//Checking whether the num is even or not
function even(num) {
    const numOfDigits = digits(num);
    console.log('numOfDigits',numOfDigits)
    if(Math.floor(numOfDigits % 2) == 0){
        return true;
    }
    return false;
};
//Checking the number of digits.
function digits(num){
    if(num < 0)
        num = num * -1;
    return num.toString().length;
    // return Math.floor(Math.log10(num) + 1); 
}

console.log('findNumbers2',findNumbers2(nums));

// function digits2(num) {
//     if (num < 0) {
//         num = num * -1;
//     }
//     return (Math.log10(num)) + 1;
// }

// console.log(digits2(-123456))

