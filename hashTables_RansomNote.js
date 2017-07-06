// A kidnapper wrote a ransom note but is worried it will be traced back to him. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use whole words available in the magazine, meaning he cannot use substrings or concatenation to create the words he needs.
//
// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.
//
// Input Format
//
// The first line contains two space-separated integers describing the respective values of  (the number of words in the magazine) and  (the number of words in the ransom note).
// The second line contains  space-separated strings denoting the words present in the magazine.
// The third line contains  space-separated strings denoting the words present in the ransom note.
//
// Constraints
//
// .
// Each word consists of English alphabetic letters (i.e.,  to  and  to ).
// The words in the note and magazine are case-sensitive.
// Output Format
//
// Print Yes if he can use the magazine to create an untraceable replica of his ransom note; otherwise, print No.
//
// Sample Input 0
//
// 6 4
// give me one grand today night
// give one grand today
// Sample Output 0
//
// Yes
// Sample Input 1
//
// 6 5
// two times three is not four
// two times two is four
// Sample Output 1
//
// No


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');

    if (magazine.lengh < ransom.lengh ) { console.log('No')};

    // function to create dictionary out of array // key = word count = val
    function createObject(array) {
        var object = {}
        array.forEach((key) => {
            if(object.hasOwnProperty(key)) {
                object[key]++
            } else {
                object[key] = 1;
            }
        })
        return object;
    }

    let magazineObj = createObject(magazine)
    let ransomObj = createObject(ransom)

    for (word in ransomObj) { // check every word in ransom
       if(magazineObj[word] < ransomObj[word]) { //count in magazine should never be < count in ransom
           return console.log("No")
       }
    }
    return console.log('Yes');

}
