package Algo_0316;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class 스택수열 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());

        StringBuilder sb = new StringBuilder();

        int maxNum = 0;
        Stack<Integer> stack = new Stack<>();
        try{
            for(int i = 0; i < n; i++){
                int newNum = Integer.parseInt(br.readLine());
    
                while(maxNum < newNum){
                    stack.push(++maxNum);
                    sb.append("+\n");
                }
    
                do {
                    sb.append("-\n");
                }while(stack.pop() != newNum);
            }
        }catch(Exception e){
            System.out.println("NO");
            return;
        }
        System.out.print(stack.isEmpty() ? sb : "NO");
    }
}