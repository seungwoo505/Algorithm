package Algo_0404;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 평범한배낭{
    static int[][] list;
    static int N, K;
    static int maxV = 0;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        N = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());

        list = new int[N][2];

        for(int n = 0; n < N; n++){
            st = new StringTokenizer(br.readLine(), " ");

            int W = Integer.parseInt(st.nextToken()), V = Integer.parseInt(st.nextToken());

            list[n] = new int[]{W, V};
        }

        int[] dp = new int[K + 1];

        for(int[] i : list){
            dp[i[0]] = i[1];
        }

        for(int i = 0; i < N; i++){
            for(int j = list[i][0] + 1; j + list[i][0] <= K; j++){
                if(dp[j] != 0) dp[j] += list[i][1];
            }
        }

        for(int d : dp){
            maxV = Math.max(d, maxV);
        }

        System.out.println(maxV);
    }
}