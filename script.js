function reverseString(str) {
    let splitString = str.split("")
    let reverseArray = splitString.reverse()
    let joinArray = reverseArray.join("")
    return joinArray
}
console.log(reverseString('hello'))
console.log(reverseString('hello my name is Sasha'))
console.log(reverseString('ok'))
console.log(reverseString('abcdef'))
console.log(reverseString('1 23'))