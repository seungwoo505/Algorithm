package Algo_0331;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class nX2타일링2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int[] list = new int[N + 1];
        if(N >= 1) list[1] = 1;
        if(N >= 2) list[2] = 3;

        for(int n = 3; n <= N; n++){
            list[n] = (list[n - 1] + list[n - 2] * 2) % 10007;
        }

        System.out.println(list[N]);
    }
}
