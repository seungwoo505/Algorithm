package Algo_0309;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 부녀회장이될테야 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());

        StringBuilder sb = new StringBuilder();

        for(int t = 0; t < T; t++){

            int k = Integer.parseInt(br.readLine()), n = Integer.parseInt(br.readLine());

            int[][] room = new int[k + 1][n + 1];

            for(int i = 0; i <= n; i++){
                room[0][i] = i;
            }

            for(int i = 0; i < k; i++){
                int count = 0;
                for(int j = 1; j <= n; j++){
                    count += room[i][j];
                    room[i + 1][j] = count;
                }
            }
            sb.append(room[k][n])
              .append("\n");
        }
        System.out.print(sb);
    }
}
