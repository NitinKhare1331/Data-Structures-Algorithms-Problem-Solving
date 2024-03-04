/*
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

//https://leetcode.com/problems/reverse-string/description/

var reverseString = function (s) {
    let left = 0;
    let right = s.length-1;
    let temp = 0;
    while(left < right){
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s;
}

// function revStr(s){
//     let n = s.length;
//     let newArr = [];
//     for(let i = n-1; i >= 0; i--){
//         newArr.push(s[i])
//     }
//     return newArr
// }

var s = ["h","e","l","l","o"];
let result = reverseString(s);
console.log(result);
// console.log(revStr(s));


// function revStr(s){
//     let i = 0;
//     j = s.length - 1;
//     temp = 0;
//     while(i<j){
//         temp = s[i];
//         s[i] = s[j]
//         s[j] = temp
//         i++;
//         j--;
//     }
//     return s
// }
