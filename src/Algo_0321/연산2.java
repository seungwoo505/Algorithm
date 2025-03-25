package Algo_0321;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;

public class 연산2 {
    static class 연산{
        int x, y;
        String str;

        public 연산(int x, int y, String str){
            this.x = x;
            this.y = y;
            this.str = str;
        }
    }
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        Deque<연산> deque = new ArrayDeque<>();
        deque.offer(new 연산(1, 1, ""));

        

        while(!deque.isEmpty()){
            연산 p = deque.poll();

            if(p.x == N || p.y == N){
                
            }
        }
        
        
    }
}
