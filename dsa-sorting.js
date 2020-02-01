//bubble sort babeyyyyy

function swap(array, i, j) {
    const tmp = array[i]
    array[i] = array[j]
    array[j] = tmp
}

function bubbleSort(array) {
    let swaps = 0
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1)
            swaps++
        }
    }
    if (swaps > 0) {
        return bubbleSort(array)
    }
    return array
}

//merge sort babbyyyy

function merge(left, right, array) {
    let leftIndex = 0
    let rightIndex = 0
    let outputIndex = 0

    while(leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++]
        } else {
            array[outputIndex++] = right[rightIndex++]
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i]
    }
    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i]
    }
    return array
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array
    }
    const middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle, array.length)
    left = mergeSort(left)
    right = mergeSort(right)
    return merge(left, right, array)
}

function partition(array, start, end) {
    const pivot = array[end - 1]
    let j = start
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j)
            j++
        }
    }
    swap(array, end - 1, j)
    return j
}

function quickSort(array, start=0, end=array.length) {
    if (start >= end) {
        return array
    }
    const middle = partition(array, start, end)
    array = quickSort(array, start, middle)
    array = quickSort(array, middle + 1, end)
    return array
}

const qsArr = [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5]
quickSort(qsArr)
console.log(`Quick Sort: ${qsArr}`)

const msArr = [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5]
mergeSort(msArr)
console.log(`Merge Sort: ${msArr}`)

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let value = array[i]
        let hole = i
        while (hole > 0 && array[hole - 1] > value) {
            array[hole] = array[hole - 1]
            hole = hole - 1
        }
        array[hole] = value
    }
    return array
}

const nums = [7, 2, 5, 1, 3, 4]
console.log(`Insertion Sort: ${insertionSort(nums)}`) 

function bucketSort(arr, bucketSize=5) {
    if (arr.length === 0) {
        return
    }

    let minValue = arr[0],
        maxValue = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]
        }
        if (arr[i] > maxValue) {
            maxValue = arr[i]
        }
    }

    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
    let buckets = new Array(bucketCount)

    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = []
    }

    arr.forEach(v => {
        return buckets[Math.floor((v - minValue) / bucketCount)].push(v)
    })

    arr.length = 0

    buckets.forEach(bucket => {
        insertionSort(bucket)
        bucket.forEach(v => arr.push(v))
    })
    return arr
}

const bucketNums = [9, 2, 7, 3, 8, 1, 11, 95, 12, 7, 1, 2, 9, 23]
console.log(`Bucket sort: ${bucketSort(bucketNums)}`)

function randomSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let randomIndex = Math.floor(Math.random()  * arr.length)
        let temp = arr[randomIndex]
        arr[randomIndex] = arr[i]
        arr[i] = temp
    }
    return arr
}

const randomArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(`Random sort: ${randomSort(randomArr)}`)