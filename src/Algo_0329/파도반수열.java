package Algo_0329;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 파도반수열{
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());

        StringBuilder sb = new StringBuilder();

        for(int t = 1; t <= T; t++){
            int N = Integer.parseInt(br.readLine());

            long[] tri = new long[N + 1];
            if(N >= 1) tri[1] = 1;
            if(N >= 2) tri[2] = 1;
            if(N >= 3) tri[3] = 1;

            for(int i = 4; i <= N; i++){
                tri[i] = tri[i - 2] + tri[i - 3];
            }

            sb.append(tri[N])
              .append("\n");
        }

        System.out.print(sb);
    }
}