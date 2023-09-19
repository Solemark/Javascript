let x = 0
let y = 0
const sortRecursive = (arr, c) => {
    if (c >= arr.length) {
        return arr
    } else {
        x = arr[c]
        y = arr[c + 1]
        if (x > y) {
            arr[c] = y
            arr[c + 1] = x
            return sortRecursive(arr, c - 1)
        }
        return sortRecursive(arr, c + 1)
    }
}

module.exports = { sortRecursive }
