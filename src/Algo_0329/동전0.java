package Algo_0329;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 동전0 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int N = Integer.parseInt(st.nextToken()), K = Integer.parseInt(st.nextToken());

        int[] money = new int[N];

        for(int n = N - 1; n >= 0; n--){
            money[n] = Integer.parseInt(br.readLine());
        }

        int count = 0;

        for(int n = 0; n < N; n++){
            count += K / money[n];
            K = K % money[n];
        }

        System.out.println(count);
    }
}