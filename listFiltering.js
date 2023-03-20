function filter_list(l) {
  let arr = [];
  for (let i = 0; i <= l.length-1;i++){
   
    if(Number.isInteger(l[i])){
       
        arr.push(l[i])
    }
}
return arr
}

console.log(filter_list([1,2,'a','b']))

