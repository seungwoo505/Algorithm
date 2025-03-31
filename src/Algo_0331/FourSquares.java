package Algo_0331;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class FourSquares {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int answer = 0;

        while(0 < N){
            N = N - (int)Math.pow((int)Math.floor(Math.sqrt(N)), 2);
            answer++;
        }

        System.out.println(answer);
    }
}