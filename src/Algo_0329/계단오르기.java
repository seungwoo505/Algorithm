package Algo_0329;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 계단오르기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int[] stairs = new int[N + 1];

        for(int n = 1; n <= N; n++){
            stairs[n] = Integer.parseInt(br.readLine());
        }

        int[] dp = new int[N + 1];

        if (N >= 1) dp[1] = stairs[1];
        if (N >= 2) dp[2] = stairs[1] + stairs[2];

        for (int i = 3; i <= N; i++) {
            dp[i] = Math.max(dp[i - 2] + stairs[i], dp[i - 3] + stairs[i - 1] + stairs[i]);
        }

        System.out.println(dp[N]);
    }
}
