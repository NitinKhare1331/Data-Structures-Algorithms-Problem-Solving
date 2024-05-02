/*
Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

Implement the FreqStack class:

FreqStack() constructs an empty frequency stack.
void push(int val) pushes an integer val onto the top of the stack.
int pop() removes and returns the most frequent element in the stack.
If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.

Example 1:

Input
["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
[[], [5], [7], [5], [7], [4], [5], [], [], [], []]
Output
[null, null, null, null, null, null, null, 5, 7, 5, 4]

Explanation
FreqStack freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
freqStack.push(7); // The stack is [5,7]
freqStack.push(5); // The stack is [5,7,5]
freqStack.push(7); // The stack is [5,7,5,7]
freqStack.push(4); // The stack is [5,7,5,7,4]
freqStack.push(5); // The stack is [5,7,5,7,4,5]
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
*/

var FreqStack = function(){
    this.freqMap = {};
    this.maxFreq = 0;
    this.elementMap = {};
}

FreqStack.prototype.push = function(val){
    if(!this.freqMap[val]){
        this.freqMap[val] = 1;
    }
    else{
        this.freqMap[val] += 1;
    }
    this.maxFreq = Math.max(this.maxFreq ,this.freqMap[val]);
    const frequency = this.freqMap[val];
    if(!this.elementMap[frequency]){
        this.elementMap[frequency] = [val];
    }
    else{
        this.elementMap[frequency].push(val);
    }
}

FreqStack.prototype.pop = function(){
    const arr = this.elementMap[this.maxFreq];
    const result = arr[arr.length-1];
    this.elementMap[this.maxFreq].pop();
    this.freqMap[this.maxFreq] --;
    if(this.elementMap[this.maxFreq].length == 0){
        delete this.elementMap[this.maxFreq];
        this.maxFreq -= 1;
    }
    return result;
}

let s = new FreqStack;
s.push(10);
s.push(10);
s.push(10);
s.push(10);
s.push(10);
s.push(10);
s.push(10);
s.push(10);
s.push(10);
s.pop()
s.pop()
s.pop()
s.pop()
s.pop();
console.log(s);