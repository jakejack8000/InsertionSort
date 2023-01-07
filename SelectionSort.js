const selectionSort = (arr) => {
    
    for(let i=0;i<arr.length;i++){
        let minIndex = i
        console.log(arr)
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        if(arr[i]>arr[minIndex]){
                const tmp = arr[i]
                arr[i] = arr[minIndex]
                arr[minIndex] = tmp
            }
    }
    return arr
}

const bubbleSort = (arr) => {
    let swapped = true
    while(swapped){
        swapped = false
        console.log(arr)
        for(let i=1;i<arr.length;i++){
            
            if(arr[i-1]>arr[i]){
                const tmp = arr[i]
                arr[i] = arr[i-1]
                arr[i-1] = tmp
                swapped = true
            }
        }
        
    }
    return arr
}


const insertionSort = (arr) => {
    for(let i=1;i<arr.length;i++){
        let j = i
        while(arr[j]<arr[j-1]){
            const tmp = arr[j-1]
            arr[j-1] = arr[j]
            arr[j] = tmp
            j--
        }
    }
    
    return arr
}
console.log(insertionSort([2,5,4,2,7,4,1,7]))
