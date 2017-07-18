function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);

    obj = {};
    a.forEach((num) => {
        if(obj.hasOwnProperty(num)) {
            obj[num] += 1 //increment val
        } else {
            obj[num] = 1 // set count to 1
        }
    })

    for (key in obj) {
        if (obj[key] === 1) {
            console.log(key.toString())
        }
    }
}
