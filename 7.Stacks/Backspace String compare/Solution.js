/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
*/

function backspaceCompare(s,t){
    let st1 = [];
    let st2 = [];
    function buildStack(str,stack){
        for(let i=0;i<str.length;i++){
            if(str[i]!='#'){
                stack.push(str[i]);
            }
            else{
                stack.pop();
            }
        }
    }
    buildStack(s,st1);
        buildStack(t,st2);

        return st1.toString() == st2.toString();
}

let s = "xywrrmu#p";
let t = "xywrrmp";
console.log(backspaceCompare(s,t));