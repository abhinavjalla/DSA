function addUptoGivenNumberBruteForce(n) {
    let total = 0;
    for (let i = 1 ;i <= n ; i++) {
        total +=  i;
    }
    return total;
}

function addUptoGivenN(n) {
    return (n * (n +1))/2;
}

var t1 = performance.now();
var res = addUptoGivenNumberBruteForce(10000000000)
var t2 = performance.now();

console.log(`${res}time taken ${(t2 - t1)/1000} seconds`)