package Algo_0328;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;

public class 균형잡힌세상 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringBuilder sb = new StringBuilder();
        String str = br.readLine();

        while(!str.equals(".")){
            char[] cs = str.toCharArray();
            Deque<Character> deque = new ArrayDeque<>();
            for(char c : cs){
                if(c == '.') break;

                if(c == '(' || c == '['){
                    deque.offer(c);
                }else if(c == ')' || c == ']'){
                    if(deque.isEmpty()) {
                        deque.offer('a');
                        break;
                    }
                    char open = deque.peekLast();

                    if(c == ')' && open != '(') break;
                    else if(c == ']' && open != '[') break;

                    deque.pollLast();
                }
            }
            if(deque.isEmpty()) sb.append("yes\n");
            else sb.append("no\n");
            str = br.readLine();
        }

        System.out.print(sb);
    }
}
