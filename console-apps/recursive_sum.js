const sum = (n, result) => {
    if (n <= 0) {
        return result
    } else {
        result += n
        return sum(n - 1, result)
    }
}

const sumArray = (arr, n, result) => {
    if (n < 0) {
        return result
    }
    result += arr[n]
    return sumArray(arr, n - 1, result)
}

module.exports = { sum, sumArray }
