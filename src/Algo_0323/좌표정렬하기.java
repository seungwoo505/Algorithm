package Algo_0323;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class 좌표정렬하기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[][] zone = new int[N][2];

        for(int n = 0; n < N; n++){
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");
            zone[n] = new int[]{Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken())};
        }

        Arrays.sort(zone, (n1, n2) -> {
            if(n1[0] == n2[0]) return n1[1] - n2[1];
            return n1[0] - n2[0];
        });

        StringBuilder sb = new StringBuilder();

        for(int n = 0; n < N; n++){
            sb.append(zone[n][0])
              .append(" ")
              .append(zone[n][1])
              .append("\n");
        }

        System.out.print(sb);
    }
}
