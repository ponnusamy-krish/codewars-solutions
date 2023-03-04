

function isPangram(string){
let newStr = string.toLowerCase()

console.log(newStr)
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
for(let i = 0;i < alphabet.length;i++){
    if(newStr.indexOf(alphabet[i])  < 0){
        return false
    }
}
return true
}

console.log(isPangram("the quick brown fox jumps over a lazy dog"))