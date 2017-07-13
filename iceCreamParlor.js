
function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var m = parseInt(readLine()); //money
        var n = parseInt(readLine()); //arr.length
        a = readLine().split(' '); // array
        a = a.map(Number);

        getId(a, m)
    }

    function getId(arr, total) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (j === i) {continue;}

                if(arr[i] + arr[j] === total) {
                    console.log((i+1)+' '+(j+1))
                    return;
                }
            }
        }
    }
}
