/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false
*/

var validAnagram = function (s,t){
    if(s.length !== t.length) return false;
    let mp = {};
    for(let i=0; i< s.length; i++){
        if(mp[s[i]]){
            mp[s[i]] += 1; //if it is defined we land here
        }
        else{
            mp[s[i]] = 1; //if it is undefined we land here
        }
    }
    console.log(mp); //for reference
    for(let i=0; i<t.length; i++){
        if(mp[t[i]] === undefined){ //it means there is 1 character which does not match
            return false;
        }
        else{
            mp[t[i]] -= 1;   //if key found then reduce frequency by 1
            if(mp[t[i]] == 0){
                delete mp[t[i]]; // if frequncy is zero then delete the key
            }
        }
    }
    console.log(mp); //for reference
    return Object.keys(mp).length == 0;
}

let s = "anagram";
let t = "nagaram";
let result = validAnagram(s,t);
console.log(result);
console.log('****');
s = 'listen';
t = 'silent';
console.log(validAnagram(s,t));
console.log('****');
s = 'car';
t = 'rat';
console.log(validAnagram(s,t));