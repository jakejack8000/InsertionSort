const unsortedArray = [1,5,3,6,7,1,2,6,3]

const insertionSort = (arr) => {
    for (let i=1;i<arr.length;i++){
        j = i
        console.log(arr)
        while(typeof(arr[j-1]!=="undefined") && arr[j] < arr[j-1] ){
            console.log(arr)
            const tmp = arr[j-1]
            arr[j-1] = arr[j]
            arr[j] = tmp
            j--
        }
    }
    return arr
}

console.log(insertionSort(unsortedArray))
