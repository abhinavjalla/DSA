export function getPlaceValueOfNumber(num, i) {
   // Math.floor(Math.abs(num) / Math.pow(10, i)) % 10 gives the digit at position i (0-indexed from right)
   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

export function findBiggestNumber(arr) {
   let bigNumber = arr[0];
   for (let i = 1; i < arr.length; i++) {
       if (bigNumber < arr[i]) {
           bigNumber = arr[i];
       }
   }
   return bigNumber;
}

export function countDigits(num) {
   return num.toString().length;
}