const removeSpaces = (str) => {
    str = str.split(' ').join('')
    return str
}

module.exports = { removeSpaces }
