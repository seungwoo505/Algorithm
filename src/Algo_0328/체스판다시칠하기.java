package Algo_0328;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 체스판다시칠하기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int N = Integer.parseInt(st.nextToken()), M = Integer.parseInt(st.nextToken());
        char[][] zone = new char[N][M];

        for(int n = 0; n < N; n++){
            zone[n] = br.readLine().toCharArray();
        }

        int count = Integer.MAX_VALUE;

        for(int n = 0; n <= N-8; n++){
            for(int m = 0; m <= M-8; m++){
                int wCount = 0, bCount = 0;
                for(int n8 = n; n8 < n+8; n8++){
                    for(int m8 = m; m8 < m+8; m8++){
                        boolean w = (n8 + m8) % 2 == 0;
                        char expectedW = w ? 'W' : 'B';
                        char expectedB = w ? 'B' : 'W';

                        if (zone[n8][m8] != expectedW) wCount++;
                        if (zone[n8][m8] != expectedB) bCount++;
                    }
                }
                count = Math.min(count, Math.min(wCount, bCount));

            }
        }
        System.out.println(count);
    }
}
