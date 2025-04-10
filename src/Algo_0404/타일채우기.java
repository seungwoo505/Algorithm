package Algo_0404;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 타일채우기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] dp = new int[N +1];

        dp[0] = 1;
        if(N >= 2) dp[2] = 3;
        //dp[4] = 11;

        for(int n = 4; n <= N; n += 2){
            dp[n] = dp[n - 2] * 3;

            for(int nn = n - 4; nn >= 0; nn -= 2){
                dp[n] += dp[nn] * 2;
            }
        }

        System.out.println(dp[N]);
    }
}
