function pariout(integer){
let oddArr = [];
let evenArr = [];
for(let i = 0; i < integer.length;i++){
    if(integer[i] % 2 == 0){
        evenArr.push(integer[i])
    }else{
        oddArr.push(integer[i])
    }
}
console.log(evenArr.length)
console.log(oddArr.length)
if(evenArr.length > oddArr.length){
    return oddArr[0]
}else {
    return evenArr[0]
}
}

console.log(pariout([0,1,2]))