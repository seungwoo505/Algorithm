package Algo_0329;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 구간합구하기4 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int N = Integer.parseInt(st.nextToken()), M = Integer.parseInt(st.nextToken());

        int[] list = new int[N + 1];
        StringBuilder sb = new StringBuilder();

        st = new StringTokenizer(br.readLine(), " ");

        for(int n = 1; n <= N; n++){
            list[n] = list[n - 1] + Integer.parseInt(st.nextToken());
        }

        for(int m = 0; m < M; m++){
            st = new StringTokenizer(br.readLine(), " ");

            int start = Integer.parseInt(st.nextToken()), end = Integer.parseInt(st.nextToken());

            sb.append(list[end] - list[start - 1])
              .append("\n");
        }

        System.out.print(sb);
    }
}
