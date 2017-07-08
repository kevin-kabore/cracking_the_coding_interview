// Task
// Given an -element array, , of distinct elements, sort array  in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:
//
// Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
// First Element: firstElement, where  is the first element in the sorted array.
// Last Element: lastElement, where  is the last element in the sorted array.
// Hint: To complete this challenge, you must add a variable that keeps a running tally of all swaps that occur during execution.
//
// Input Format
//
// The first line contains an integer, , denoting the number of elements in array .
// The second line contains  space-separated integers describing the respective values of .
//
// Constraints
//
// ,
// Output Format
//
// You must print the following three lines of output:
//
// Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
// First Element: firstElement, where  is the first element in the sorted array.
// Last Element: lastElement, where  is the last element in the sorted array.
// Sample Input 0
//
// 3
// 1 2 3
// Sample Output 0
//
// Array is sorted in 0 swaps.
// First Element: 1
// Last Element: 3
// Explanation 0
// The array is already sorted, so  swaps take place and we print the necessary three lines of output shown above.
//
// Sample Input 1
//
// 3
// 3 2 1
// Sample Output 1
//
// Array is sorted in 3 swaps.
// First Element: 1
// Last Element: 3

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);

    function swap(a, leftIndex, rightIndex) {
        var temp = a[leftIndex];
        a[leftIndex] = a[rightIndex]
        a[rightIndex] = temp;
    }

    var lastUnsorted = a.length - 1;
    var isSorted = false;
    var numOfSwaps = 0;
    while (!isSorted){
        isSorted = true
        for (var i = 0; i < lastUnsorted; i++) {
            if (a[i] > a[i+1]) {
                swap( a, i, i+1);
                numOfSwaps++
                isSorted = false;
            }
        }
        lastUnsorted--;
    }
    console.log('Array is sorted in '+ numOfSwaps + ' swaps.')
    console.log('First Element: '+a[0])
    console.log('Last Element: '+a[a.length-1])
}
