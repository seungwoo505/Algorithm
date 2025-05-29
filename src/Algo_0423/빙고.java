package Algo_0423;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 빙고 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        int[][] list = new int[5][5];

        for (int i = 0; i < 5; i++) {
            st = new StringTokenizer(br.readLine(), " ");

            for (int j = 0; j < 5; j++) {
                list[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        boolean[][] isSelected = new boolean[5][5];

        for (int i = 0; i < 5; i++) {
            st = new StringTokenizer(br.readLine(), " ");
            for (int j = 0; j < 5; j++) {
                int check = Integer.parseInt(st.nextToken());

                int[] point = new int[2];
            }
        }
    }
}
