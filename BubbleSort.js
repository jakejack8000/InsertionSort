const unsortedArray = [0,-1,-5,2,4,1,5,3,6,7,1,2,6,3]

const bubbleSort = (arr) => {
    let swapped = false
    const doPass = () => {
        swapped = false
    for(let i=1;i<arr.length;i++){
        if(arr[i-1]>arr[i]){
            swapped = true
            const tmp = arr[i]
            arr[i] = arr[i-1]
            arr[i-1] = tmp
        }
    }
    if(swapped === true){
        doPass()
    }
    }
    doPass()
    return arr
}

console.log(bubbleSort(unsortedArray))
