//Davis has  staircases in his house and he likes to climb each staircase , , or  steps at a time. Being a very precocious child, he wonders how many ways there are to reach the top of the staircase.

// Given the respective heights for each of the  staircases in his house, find and print the number of ways he can climb each staircase on a new line.

function main() {
    var s = parseInt(readLine());
    let obj = {}
    for(var a0 = 0; a0 < s; a0++){
        var n = parseInt(readLine());
        console.log(climb(n, obj))
    }

    function climb(n, cache) {
        if(cache.hasOwnProperty(n)){
            return cache[n]
        } else if( n === 1) {
            return 1
        } else if (n === 2) {
            return 2
        } else if (n=== 3) {
            return 4
        } else {
            cache[n] = climb(n-1, cache) + climb(n-2, cache) + climb(n-3, cache)
            return cache[n]
        }

    }
}
