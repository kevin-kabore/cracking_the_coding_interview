function main() {
    var t = parseInt(readLine());


    function merge(arr, temp, leftStart, middle, rightEnd) {

        var i = leftStart; // index of left subarray
        var j = middle; // index of right subarray;
        var k = leftStart; // index of temp merge array

        var invCount = 0;

        while((i <= middle - 1) && (j <= rightEnd)) {
            if(arr[i]  <= arr[j]) { //copy elements and increment;
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];

                invCount = invCount + (middle - i) // because left and right subarrays already sorted
                // so all remaining elements in a[i+1]...a[mid] will be greater than a[j]
            }
        }
        // once finished
        // copy remaining elements if any
        while (i <= middle -1) {
            temp[k++] = arr[i++]
        }
        while(j <= rightEnd) {
            temp[k++] = arr[j++];
        }

        // copy merged elements to original array
        for (var i = leftStart; i <= rightEnd; i++){
            arr[i] = temp[i]
        }
        return invCount;
    }


    function mergeSort(arr, temp, leftStart, rightEnd) {
        var invCount = 0;
        if(rightEnd > leftStart) {
            var middle = Math.floor((leftStart + rightEnd)/2);
            invCount = mergeSort(arr, temp, leftStart, middle); // sum of inversions in left, right, and merging steps
            invCount += mergeSort(arr, temp, middle+1, rightEnd);

            invCount += merge(arr, temp, leftStart, middle+1, rightEnd);
        }
        return invCount;
    }


    for(var a0 = 0; a0 < t; a0++){
        var temp = [];
        var n = parseInt(readLine());
        arr = readLine().split(' ');
        arr = arr.map(Number);
        console.log(mergeSort(arr, temp, 0, arr.length -1));
    }
}
