package Algo_0327;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 이항계수1 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int N = Integer.parseInt(st.nextToken()), K = Integer.parseInt(st.nextToken());

        if(K == 0 || N - K == 0){
            System.out.println(1);
            return;
        }
        int[] pactorial = new int[N + 1];
        pactorial[1] = 1;
        for(int i = 2; i <= N; i++){
            pactorial[i] = pactorial[i - 1] * i;
        }
        System.out.println(pactorial[N] / (pactorial[K] * pactorial[N - K]));
    }
}
