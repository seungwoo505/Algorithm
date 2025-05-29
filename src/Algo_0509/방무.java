package Algo_0509;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 방무 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        double answer = 0;

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        StringBuilder sb = new StringBuilder();

        for (int n = 0; n < N; n++) {
            answer = Math.round((1 - ((1 - answer / 100) * (1 - Double.parseDouble(st.nextToken()) / 100))) * 100000000)
                    / 1000000.0;
            sb.append(answer)
                    .append("\n");
        }

        System.out.println(sb);
    }
}
