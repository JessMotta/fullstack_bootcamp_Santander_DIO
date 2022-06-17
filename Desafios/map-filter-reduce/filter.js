function filterEven(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 === 0
}

const myArray = [1, 23, 5, 60, 14, 85]

console.log(filterEven(myArray))