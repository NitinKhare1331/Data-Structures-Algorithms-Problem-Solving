/*
You are given an integer ‘N’, which denotes there are ‘N’ friends. You are supposed to form some pairs them satisfying the following conditions:

1. Each friend can be paired with some other friend or remain single.

2. Each friend can be a part of at most one pair.

You are supposed to find the total number of ways in which the pairing can be done satisfying both conditions. Since the number of ways can be quite large, you should find the answer modulo 1000000007(10^9+7).

Note:
1. Return the final answer by doing a mod with 10^9 + 7.
2. Pairs {A, B} and {B, A} are considered the same.

Sample Input 1:
2
3
1
Sample Output 1:
4
1
Explanation for Sample Input 1:
In the first test case, there are three friends, and the following pairings can be done:
All single Combination: {1}, {2}, {3}
One pair Combination: {1}, {2, 3} ; {1, 2}, {3} ; {1, 3}, {2}
In the case of zero pairings, nobody is paired with each other. This is one of the possible answers.
In the case of one pair combination, Three answers are possible: the Second is paired with the Third, the First is paired with the Second, and the First is paired with the third.
Here, Two pairs can’t be made as there are only four friends.
So, the answer is 1 + 3 = 4

In the second test case, there is only one friend and can’t be paired with any other. So, the answer is 1.
Sample Input 2:
2   
10
2
Sample Output 2:
9496
2
*/
var dp;
function f(n){
    if(n==0||n==1||n==2){
        return n;
    }
    if(dp[n] != -1) return dp[n];
    return dp[n] = f(n-1) + (n-1)*f(n-2);
}

function numberOfWays(n){
    dp = Array(10005);
    dp.fill(-1);
    return f(n);
}

console.log(numberOfWays(4));

