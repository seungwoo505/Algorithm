package Algo_0404;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 동전1{
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int N = Integer.parseInt(st.nextToken()), K = Integer.parseInt(st.nextToken());
        int[] money = new int[N];
        int[] dp = new int[K + 1];
        dp[0] = 1;

        for(int n = 0; n < N; n++){
            money[n] = Integer.parseInt(br.readLine());
        }

        for(int coin : money){
            for(int k = coin; k <= K; k++){
                dp[k] += dp[k - coin];
            }
        }

        System.out.println(dp[K]);
    }
}