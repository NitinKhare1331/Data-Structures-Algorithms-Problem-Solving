import java.util.*;
public class Remove{
    public static String removeStars(String s) {
        Stack<Character> st = new Stack();
        int i = 0;
        while(i<s.length()){
            if(s.charAt(i)!='*'){
                st.push(s.charAt(i));
            }
            else if(s.charAt(i)=='*' && !st.isEmpty()){
                st.pop();
            }
            i++;
        }
        String res = "";
        while(!st.isEmpty()){
            res = st.peek() + res;
            st.pop();
        }
        return res;
    }
    public static void main(String[] args){
        String s = "Leet**cod*e";
        String res = removeStars(s);
        System.out.println(res);
    }
}