function reverseWords(s){
    let words = s.split(' ');    
    let arr = [];

    for(let i=words.length-1; i>=0; i--){
        if(words[i]){
            arr.push(words[i]);
        }
    }    
    return arr.join(' ');
}

let s = " hello world ";
console.log(reverseWords(s));
