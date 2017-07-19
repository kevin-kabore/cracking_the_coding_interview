// Brute force
function main() {
    var p = parseInt(readLine());
    for(var a0 = 0; a0 < p; a0++){
        var n = parseInt(readLine());
        isPrime(n) ? console.log("Prime") : console.log("Not prime")

    }
    function isPrime(n) {
        if (n < 2) {
            return false;
        } else {
          for (var i = 2; i < n; i++) {
              if( n % i === 0) { return false;}
          }
        }
        return true
    }
}


function main2() {
    var p = parseInt(readLine());
    for(var a0 = 0; a0 < p; a0++){
        var n = parseInt(readLine());
        isPrime(n) ? console.log("Prime") : console.log("Not prime")

    }
    function isPrime(n) {
        if (n < 2) {
            return false;
        } else {
          for (var i = 2; i <= Math.sqrt(n); i++) {
              if( n % i === 0) { return false;}
          }
        }
        return true
    }
}
