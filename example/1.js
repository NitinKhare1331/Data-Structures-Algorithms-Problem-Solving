var reverseWords = function(s) {
    s = s.split(" ");
    let result = [];
    for(let i = s.length-1; i >= 0; i--){
        if(s[i]!==""){
            result.push(s[i]);
        }
    }
    return result.join(" ")
}
let s = "nitin     khare"
console.log(reverseWords(s))

var reverseWords = function(s) {
    s = s.split(' ');
    let res = [];
    for(let i=s.length-1; i>=0; i--) {
        if(s[i]!='') res.push(s[i]);
    }
    return res.join(' ');
};