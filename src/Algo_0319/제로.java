package Algo_0319;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class 제로 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        Stack<Long> stack = new Stack<>();

        long K = Long.parseLong(br.readLine());

        for(int k = 0; k < K; k++){
            long num = Long.parseLong(br.readLine());

            if(num == 0){
                stack.pop();
            }else{
                stack.push(num);
            }
        }

        long size = 0;

        for(long i : stack){
            size += i;
        }

        System.out.println(size);
    }
}
