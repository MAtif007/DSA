let name = "Kunal";
let target = 'a';

function searchInstring(str, tar) {
     if (str.length === 0) {
        return -1
     }

    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (str[i] === tar) {
          return i;
        }
        
    }
    return -1;
}

console.log(searchInstring(name, target))

function search(str, tar) {
    if (str.length === 0) {
       return false
    }

   for (let i = 0; i < str.length; i++) {
    //    const element = str[i];
       if (str.charAt(i) === tar) {
         return true;
       }
       
   }
   return false;
}

console.log(search(name, target))