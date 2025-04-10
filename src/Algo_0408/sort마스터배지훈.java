package Algo_0408;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class sort마스터배지훈 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int[] list = new int[N];

        for (int n = 0; n < N; n++) {
            list[n] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(list);

        System.out.println(list[N - 1]);

    }
}
