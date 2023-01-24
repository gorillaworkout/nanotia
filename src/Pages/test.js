// console.log('asdasd')


// let arr = [1,2,3,4,5,6,7,8]
// let result = []
// arr.forEach((val,index)=>{
//     result.push(arr[(arr.length -1)-index])
//     // return arr[arr.length-1]
// })
// console.log(result)


let arr = [-4,3,-9,0,4,1]
let result = []
let findPositif = arr.filter((val,index)=>{
    return val > 0
})

let findNegatif = arr.filter((val,index)=>{
    return val < 0
})
let findZero = arr.filter((val,index)=>{
    return val === 0

})
let countPositif = findPositif.length / arr.length
let countNegatif = findNegatif.length / arr.length
let countZero = Math.ceil(findZero.length / arr.length)
result.push(countPositif,countNegatif,countZero)
// console.log(result)



// console.log(findPositif)
// console.log(findNegatif)
// console.log(findZero)
let resul2t = []
var s = "The quick brown fox jumps over the lazy dog.";
// let s = 'The quick'
s.split(' ')
console.log(s)
let arrNew = s.split(" ")
console.log(arrNew, typeof arrNew)

let res = []
arrNew.forEach((val,index)=>{
    let string = []
    for(let i=0; i<val.length; i++){
        // console.log(val.charAt((val.length-1)-i))
        string.push(val.charAt((val.length-1)-i))
    }
    let join = string.join("")
    res.push(join)
})
let joinToString = res.join(" ")
console.log(joinToString)
