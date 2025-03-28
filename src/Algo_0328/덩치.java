package Algo_0328;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class 덩치 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int[][] list = new int[N][2];

        for(int n = 0; n < N; n++){
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");

            list[n] = new int[]{Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken())};
        }

        int[] rank = new int[N];
        Arrays.fill(rank, 1);

        for(int n = 0; n < N; n++){
            for(int k = 0; k < N; k++){
                if(n == k) continue;

                if(list[n][0] < list[k][0] && list[n][1] < list[k][1]){
                    rank[n]++;
                }
            }
        }
        StringBuilder sb = new StringBuilder(N * 2);
        for(int i = 0; i < N; i++){
            sb.append(rank[i])
              .append(" ");
        }

        System.out.println(sb.toString().trim());
    }
}
