const sumArray = (a) => {
    let total = 0
    for (let i = 0; i < a.length; i++) {
        total += a[i]
    }
    return total
}

module.exports = { sumArray }
