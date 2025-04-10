package Algo_0404;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 피보나치수 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int[] dp = new int[N + 1];
        if(N >= 1) dp[1] = 1;
 
        for(int n = 2; n <= N; n++){
            dp[n] = dp[n - 1] + dp[n - 2];
        }

        System.out.println(dp[N]);
    }
}
