package Algo_0314;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class 스택 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        Stack<Integer> stack = new Stack<>();

        StringBuilder sb = new StringBuilder();

        for(int n = 0; n < N; n++){
            String[] s = br.readLine().split(" ");

            switch (s[0]) {
                case "push":
                    stack.push(Integer.parseInt(s[1]));
                    break;
                case "pop":
                    sb.append(stack.isEmpty() ? "-1" : stack.pop()).append("\n");
                    break;
                case "size":
                    sb.append(stack.size()).append("\n");
                    break;
                case "empty":
                    sb.append(!stack.isEmpty() ? 0 : 1).append("\n");
                    break;
                case "top":
                    sb.append(stack.isEmpty() ? "-1" : stack.peek()).append("\n");
                    break;
            }
        }
        System.out.print(sb.toString());
    }
}